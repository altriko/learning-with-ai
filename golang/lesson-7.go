package main

import (
	"errors"
	"fmt"
	"io"
	"net/http"
)

func fetchPaymentStatus(endpoint string, referenceId string) (string, error) {
	if referenceId == "" {
		return "", errors.New("referenceId is required")
	}
	resp, err := http.Get(endpoint + referenceId) //send GET request, get back response + error
	if err != nil {
		// fmt.Println("Request failed: ", err) // optional but it'll print twice, read the response body if not error
		return "", err // if error, stop, return blank since there's 2 value for str, then the err
	}
	defer resp.Body.Close()            // close the promise connection
	body, err := io.ReadAll(resp.Body) // this is where it's converted into the normal body resp
	return string(body), nil           // return the string body and nil (since no error)
}

// run test
// positive scenario endpoint: https://httpbin.org/get?referenceId=

func main() {
	fmt.Println(fetchPaymentStatus("https://httpbin.org/get?referenceId=", "test"))
}
