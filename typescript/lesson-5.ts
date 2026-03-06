//Lesson 5: Arrays
// import { Payment } from "./lesson-4"  // import the type, since it'll said it's duplicate anw if i recreated

type Payment = { // object should be UPPERCASE, use type (instead of const)
    referenceId: string // no need comma on this
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const paymentArray: Payment[] = [
    {referenceId: "txn1", amount: 10000, paymentMethod: "DANA", isSettled: true},
    {referenceId: "txn2", amount: 20000, paymentMethod: "OVO", isSettled: false},
    {referenceId: "txn3", amount: 30000, paymentMethod: "QRIS", isSettled: true}
]

function getTotalAmount ( // this is input ONLY
    payments: Payment[]
        ) { // this is where the logic goes
        let sumCalc: number = 0
        for (const payment of payments) {
            sumCalc += payment.amount 
        } 
        return sumCalc  
    }

console.log(getTotalAmount(paymentArray))