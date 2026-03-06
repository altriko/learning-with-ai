import { processPayments } from "./services/paymentService.ts";
import type { Payment } from "./types/payment.ts";

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
console.log(processPayments(testPayment))