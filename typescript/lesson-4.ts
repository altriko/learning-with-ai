// Lesson 4: Objects

// adding export to be used in other module
type Payment = { // object should be UPPERCASE, use type (instead of const)
    referenceId: string // no need comma on this
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const txn1: Payment = {
    referenceId: "txn1", //this is like JSON where we need "," on each param
    amount: 10000,
    paymentMethod: "Cards",
    isSettled: true
}

const txn2: Payment = {
    referenceId: "txn2",
    amount: 50000,
    paymentMethod: "DANA",
    isSettled: false
}


// Create function
function describePayment (
    payment: Payment
): string {
    return "Payment " + payment.referenceId + " via " + payment.paymentMethod + " with amount of " + payment.amount + " is " + (payment.isSettled === true ? "settled" : "not settled") //condition ? "value if true" : "value if false"
}

// print
console.log(describePayment(txn1))
console.log(describePayment(txn2))
