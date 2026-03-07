package main

import "fmt"

// create the type
type Payment struct {
	ReferenceId   string
	Amount        int
	PaymentMethod string
	IsSettled     bool
}

// create the vars, 2 vars
var pymts1 = Payment{
	ReferenceId:   "txn01",
	Amount:        50000,
	PaymentMethod: "OVO",
	IsSettled:     true,
}

var pymts2 = Payment{
	ReferenceId:   "txn02",
	Amount:        10000,
	PaymentMethod: "Cards",
	IsSettled:     false,
}

func describePayment(p Payment) string { // use the one word only to simplified

	var status string
	if p.IsSettled {
		status = "Settled"
	} else {
		status = "Unsettled"
	}

	// note on above, i can use status := "Unsettled" then put the if condition, but only if i declare the value first, not an empty information

	return "Payment " + p.ReferenceId +
		" from " + p.PaymentMethod +
		" with amount " + fmt.Sprintf("%d", p.Amount) +
		" is " + status // if else simplified
}

// call the func
func main() {
	fmt.Println(describePayment(pymts1))
	fmt.Println(describePayment(pymts2))
}
