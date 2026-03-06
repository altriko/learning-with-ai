import type { Payment } from "../types/payment.ts";
import { calculateTotal } from "../utils/calculate.ts";

export function processPayments (
    payment: Payment[]
) {
    const process = payment
        .filter(payment => payment.isSettled)    
        .map(payment => calculateTotal(payment.amount, 0.1))
    return process
}


// UNIT TEST
// add the const
const testPayment:Payment[] = [{
    referenceId: "test1",
    amount: 10000,
    paymentMethod: "OVO",
    isSettled: true
},
{
    referenceId: "test2",
    amount: 20000,
    paymentMethod: "DANA",
    isSettled: false
}]

// test the function
// console.log(processPayments(testPayment))