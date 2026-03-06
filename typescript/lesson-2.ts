// Lesson 2: Functions
function calculateTotal(    // it will have 2 params
    amount: number,
    feePercent: number
): number{     // this will return the function a number
    const total = amount + (amount * feePercent)
    return total 
}

console.log(calculateTotal(10000, 0.015))