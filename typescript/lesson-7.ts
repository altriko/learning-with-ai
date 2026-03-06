// Lesson 7: Array Methods (filter, map)                    

// import { Payment } from "./lesson-4.ts"; --> still does not worked
type Payment = { // object should be UPPERCASE, use type (instead of const)
    referenceId: string // no need comma on this
    amount: number
    paymentMethod: string
    isSettled: boolean
}


// 1. Reuse the Payment type and create an array of 4 payments (mix of settled/unsettled, different methods)
const payments: Payment[] = [
    {referenceId: "txn1", amount: 10000, paymentMethod: "OVO", isSettled: true},
    {referenceId: "txn2", amount: 20000, paymentMethod: "DANA", isSettled: false},
    {referenceId: "txn3", amount: 30000, paymentMethod: "SHOPEEPAY", isSettled: true},
    {referenceId: "txn4", amount: 40000, paymentMethod: "QRIS", isSettled: false}
]

// 2. Use filter to get only unsettled payments, console.log the result

const unsettledPayments = payments.filter(unsettled => !unsettled.isSettled) // the unsettled is just a temporary constant to get the information
console.log("1. Unsettled: ", unsettledPayments)

//   3. Use map to get a list of just the referenceIds from all payments, console.log the result
const referenceIds = payments.map(reference => reference.referenceId)
console.log("2. Reference IDs: ", referenceIds)


// 4.  Combine them: get the amounts of only settled payments, console.log the result
const settledID = payments
    .filter(payment => payment.isSettled)
    .map(payments => payments.amount)

console.log("3. Settled Amount: ", settledID)