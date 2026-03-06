package main

import "fmt"

func calculateTotal(amount int, feePercent float64) float64 {
	return float64(amount) * feePercent
}

func main() {
	fmt.Println(calculateTotal(100000, 0.015))
}
