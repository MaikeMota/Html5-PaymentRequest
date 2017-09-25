if (window.PaymentRequest) {
    //if it is supported on the user's browser

    //Payment request Object
    const supportedPaymentMethods = [
        {
            supportedMethods: ['basic-card']
        }
    ];

    //payment details (i.e. cost/currency)

    const paymentDetails = {
        displayItems: [
            {
                label: "Original donation amount",
                amount: { currency: "BRL", value: "65.00" }, // BRL$65.00
            },
            {
                label: "Friends and BRL discount",
                amount: { currency: "BRL", value: "-10.00" }, // -BRL$10.00
                pending: true // The price is not determined yet
            }
        ],
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'BRL',
                value: 55
            }
        }
    }

    // custom options
    const options = {};

    //create request

    const paymentRequest = new PaymentRequest(supportedPaymentMethods, paymentDetails, options);

    paymentRequest.show()
        .then(payment => {
            console.log(payment);
            payment.complete("success")
        })
        .catch(error => console.error(error));

} else {
    //fallback to your other implementation
}