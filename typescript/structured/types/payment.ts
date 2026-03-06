export type Payment = { // object should be UPPERCASE, use type (instead of const)
    referenceId: string // no need comma on this
    amount: number
    paymentMethod: string
    isSettled: boolean
}