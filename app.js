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
        total: {
            label: 'Total Cost',
            amount: {
                currency: 'BRL',
                value: 0.001
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