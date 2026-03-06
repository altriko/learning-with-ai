// Lesson 3: Conditions (if/else)

// define the threshold
const upThreshold: number = 50000
const downThreshold: number = 10000

// function to insert the number and run the if else logic
function checkPaymentLimit(
    amount: number
): string { // need to have the "string" in them to define what it will return
    if (amount > upThreshold) {
        return "requires manual review" // return is needed
    } else if (amount >= downThreshold && amount <= upThreshold
    ) {
        return "auto approved"
    } else { // directly give the value for else conditions
        return "amount too low"
    }
}

console.log(checkPaymentLimit(100000000)) // should say: requires manual review
console.log(checkPaymentLimit(50000))     // should say: auto approved
console.log(checkPaymentLimit(5000))      // should say: amount too low