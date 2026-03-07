package main

import "fmt"

type Payment struct {
	ReferenceId   string
	Amount        int
	PaymentMethod string
	IsSettled     bool
}

var payments = []Payment{
	{ReferenceId: "txn1", Amount: 10000, PaymentMethod: "OVO", IsSettled: true},
	{ReferenceId: "txn2", Amount: 20000, PaymentMethod: "DANA", IsSettled: false},
	{ReferenceId: "txn3", Amount: 30000, PaymentMethod: "QRIS", IsSettled: true},
}

func getTotalAmount(p []Payment) int { // name it first with p before the []
	var total int            // init the value to be summed
	for _, pymt := range p { // i dont understand where did i ask them to loop to the vlaue []Payment above?
		total += pymt.Amount // add always
	}
	return total
}

func main() {
	fmt.Println(getTotalAmount(payments))
}
