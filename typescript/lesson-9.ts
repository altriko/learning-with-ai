// Lesson 9: async/await & Error Handling

async function simulatePayment (amount:number, willSucceed:boolean): Promise<string> {
    try {
        await new Promise(resolve=> setTimeout(resolve,1000)) // no need to put constant, we just want to wait for 1 sec simulated
        if (!willSucceed) throw new Error("Paymentdeclined") // in here, throw new error -> it will jump to catch
        return "Payment success: " + amount
    } catch (error) {
        return "Payment declined"
    }
}

// TEST
async function main() { // need to have async as we use await below
    console.log(await simulatePayment(50000, true))
    console.log(await simulatePayment(50000, false))
}

main() // it will run all