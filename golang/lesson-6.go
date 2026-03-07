package main

import (
	"errors"
	"fmt"
)

func validatePayment(amount int, paymentMethod string) (bool, error) {
	//   |_____________| |_______________________________| |___________|
	//   function name    			  inputs				  outputs
	if amount < 10000 {
		return false, errors.New("amount too low") // return false since it's an error
	} else if paymentMethod == "" {
		return false, errors.New("payment method required")
	}
	return true, nil // means all good, no error
}

// Test function
func runTest(testname string, amount int, method string) { // no need to put the output since it'll just log it
	isValid, err := validatePayment(amount, method)
	if err != nil {
		fmt.Println(testname, " is failed: ", err)
	} else {
		fmt.Println(testname, " is success: ", isValid)
	}

}

// TEST
func main() {
	//test 1: amount too low
	runTest("Test 1", 1, "OVO")
	//test 2: method missing
	runTest("Test 2", 10000, "")
	//test 3: success
	runTest("Test 3", 10000000, "OVO")
}
