package main

import "fmt"

var upLim int = 50000000
var bottomLim int = 10000

func checkPaymentLimit(amount int) string { // put the type of return here
	if amount > upLim {
		return "manual review"
	} else if amount > bottomLim && amount <= upLim { // else if need to be in the same with { bracket
		return "auto approved"
	} else {
		return "amount too low"
	}
}

func main() {
	fmt.Println(checkPaymentLimit(100000000))
	fmt.Println(checkPaymentLimit(2000000))
	fmt.Println(checkPaymentLimit(100))

	paymentMethod := "QRIS" // this can be direct, technically can be paymentMethod string =, but this is faster
	switch paymentMethod {
	case "QRIS":
		fmt.Println("Pay with QRIS")
	case "DANA":
		fmt.Println("Pay with DANA")
	case "OVO":
		fmt.Println("Pay with OVO")
	default:
		fmt.Println("Other Method")
	}
}
