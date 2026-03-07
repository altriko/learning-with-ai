# Go (Golang) Learning Module

## Progress

| Lesson | Concept | Status |
|---|---|---|
| 1 | Variables & data types | Done |
| 2 | Functions | Done |
| 3 | Conditions (if/else, switch) | Done |
| 4 | Structs | Done |
| 5 | Slices & loops | Done |
| 6 | Error handling | Done |
| 7 | HTTP & APIs | Done |

---

## When to use TypeScript vs Go

| | TypeScript | Go |
|---|---|---|
| Speed | Fast enough | Very fast |
| Learning curve | Easier | Steeper |
| Best for | APIs, UIs, tools | High-volume, core systems |
| Common in payments | Merchant-facing, dashboards | Transaction engine, settlement |

**TypeScript** — anything close to the user: dashboards, payment links, webhook handlers, merchant portals

**Go** — anything needing speed and reliability: transaction processing, settlement engines, card authorization, fraud scoring

---

## Lesson 1: Variables & Data Types

### Go file structure

Every Go file must start with:
```go
package main

import "fmt"

func main() {
    // all running code goes here
}
```

- `package main` — declares this is the main package (entry point)
- `import "fmt"` — imports the fmt package for printing
- `func main()` — where Go starts running your code
- All running code must be **inside** a function

### Variables

**TypeScript vs Go comparison:**

```typescript
// TypeScript
const amount: number = 50000
const currency: string = "IDR"
const isSuccess: boolean = true
```

```go
// Go
var amount int = 50000
var currency string = "IDR"
var isSuccess bool = true
```

Differences:
- `var` instead of `const`/`let`
- Type comes after the name
- `number` → `int`, `string` → `string`, `boolean` → `bool`

### Shorthand `:=`

Go's most common style — declares and assigns at the same time, type is inferred automatically:

```go
amount := 50000
currency := "IDR"
isSuccess := true
```

### Printing

```go
fmt.Println(amount, currency, isSuccess)
```

`fmt.Println` is Go's equivalent of `console.log`. `fmt` is a built-in package that handles printing.

### Running a Go file

```bash
go run lesson-1.go
```

### Exercise (lesson-1.go)

Write 3 variables (transaction ID, payment amount, payment status) and print them.

```go
package main

import "fmt"

func main() {
    var amount int = 50000
    var currency string = "IDR"
    var isSuccess bool = true

    fmt.Println(amount, currency, isSuccess)
}
```

---

## Lesson 2: Functions

### TypeScript vs Go comparison

```typescript
// TypeScript
function calculateFee(amount: number, feePercent: number): number {
    return amount * feePercent
}
```

```go
// Go
func calculateFee(amount int, feePercent float64) float64 {
    return float64(amount) * feePercent
}
```

Differences:
- `function` → `func`
- Parameter types come **after** the name: `amount int` not `amount: number`
- Return type comes **after** the `()`: `float64` not `: number`
- No `:` anywhere

### Go number types

| Type | Used for | Example |
|---|---|---|
| `int` | whole numbers | `50000` |
| `float64` | decimal numbers | `0.015`, `1500.50` |

Go does not mix types automatically. Convert with `float64(amount)` when needed.

### Function structure in Go

All functions must be defined at the **top level** — never inside another function:

```go
func calculateTotal(...) float64 { }  // top level — correct

func main() {
    func helper() { }   // inside main — NOT allowed in Go
}
```

All functions are siblings:
```
package main
    ├── func calculateTotal()   ← sibling
    ├── func processPayment()   ← sibling
    └── func main()             ← entry point, starts execution
```

### Multiple return values

Go functions can return more than one value — unique to Go:

```go
func processPayment(amount int) (int, string) {
    fee := amount * 2 / 100
    status := "success"
    return fee, status
}

fee, status := processPayment(50000)
```

Commonly used to return a result and an error:

```go
func processPayment(amount int) (int, error) { }

result, err := processPayment(50000)
```

### Exercise (lesson-2.go)

Write a function `calculateTotal` that takes `amount int` and `feePercent float64`, returns total as `float64`.

```go
package main

import "fmt"

func calculateTotal(amount int, feePercent float64) float64 {
    return float64(amount) * feePercent
}

func main() {
    fmt.Println(calculateTotal(100000, 0.015))
}
```

---

## Lesson 3: Conditions (if/else, switch)

### if/else — almost identical to TypeScript, but no parentheses

```go
if amount > 50000000 {
    return "manual review"
} else if amount >= 10000 {
    return "auto approved"
} else {
    return "too low"
}
```

**Key rule:** `} else if` must be on the **same line** as the closing `}`. Go is strict about this.

### switch — cleaner than multiple else if

```go
switch paymentMethod {
case "QRIS":
    fmt.Println("Pay via QRIS")
case "OVO":
    fmt.Println("Pay via OVO")
case "DANA":
    fmt.Println("Pay via DANA")
default:
    fmt.Println("Unknown method")
}
```

- `switch` = variable to check
- `case` = each possible value
- `default` = catch-all (like `else`)

Use `switch` when checking one variable against multiple values. Use `if/else` for range checks (`>`, `<`, `&&`).

### Exercise (lesson-3.go)

1. Write `checkPaymentLimit(amount int) string` using `if/else if/else`
2. Write a `switch` in `main()` for payment methods

```go
package main

import "fmt"

var upLim int = 50000000
var bottomLim int = 10000

func checkPaymentLimit(amount int) string {
    if amount > upLim {
        return "manual review"
    } else if amount > bottomLim && amount <= upLim {
        return "auto approved"
    } else {
        return "amount too low"
    }
}

func main() {
    fmt.Println(checkPaymentLimit(100000000))  // manual review
    fmt.Println(checkPaymentLimit(2000000))    // auto approved
    fmt.Println(checkPaymentLimit(100))        // amount too low

    paymentMethod := "QRIS"
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
```

---

## Lesson 4: Structs

Go's equivalent of TypeScript's `type` for defining object shapes.

### TypeScript vs Go

```typescript
// TypeScript
type Payment = {
    referenceId: string
    amount:      number
    isSettled:   boolean
}
```

```go
// Go
type Payment struct {
    ReferenceId   string
    Amount        int
    IsSettled     bool
}
```

### Why capitalize field names?

In Go, capitalization controls visibility:
- `Amount` — exported, visible outside the package
- `amount` — unexported, only visible inside the package

Always capitalize struct fields so other files can use them.

### Creating a struct instance

```go
// top level — use var
var txn1 = Payment{
    ReferenceId:   "txn01",
    Amount:        50000,
    IsSettled:     true,
}

// inside function — use :=
txn1 := Payment{
    ReferenceId:   "txn01",
    Amount:        50000,
    IsSettled:     true,
}
```

Access fields with `.`: `txn1.Amount`, `txn1.IsSettled`

### var vs := rules

| Situation | Use |
|---|---|
| Outside function (top level) | `var` only |
| Inside function, declare + assign now | `:=` preferred |
| Inside function, declare now assign later | `var` |

```go
status := "Settled"    // declare + assign now
var status string      // declare now, assign later (defaults to "")
```

### No ternary operator in Go

Go has no `? :`. Use `if/else` instead:

```go
var status string
if p.IsSettled {
    status = "Settled"
} else {
    status = "Unsettled"
}
```

### fmt.Sprintf — format values into strings

```go
fmt.Sprintf("%d", p.Amount)   // %d = insert integer
fmt.Sprintf("%s", p.Name)     // %s = insert string
fmt.Sprintf("%f", p.Rate)     // %f = insert float
```

### Exercise (lesson-4.go)

1. Define a `Payment` struct with `ReferenceId`, `Amount`, `PaymentMethod`, `IsSettled`
2. Create 2 struct instances at top level with `var`
3. Write `describePayment(p Payment) string` using `var status string` + `if/else`
4. Call both in `main()` and print

```go
package main

import "fmt"

type Payment struct {
    ReferenceId   string
    Amount        int
    PaymentMethod string
    IsSettled     bool
}

var pymts1 = Payment{ReferenceId: "txn01", Amount: 50000, PaymentMethod: "OVO", IsSettled: true}
var pymts2 = Payment{ReferenceId: "txn02", Amount: 10000, PaymentMethod: "Cards", IsSettled: false}

func describePayment(p Payment) string {
    var status string
    if p.IsSettled {
        status = "Settled"
    } else {
        status = "Unsettled"
    }
    return "Payment " + p.ReferenceId +
        " from " + p.PaymentMethod +
        " with amount " + fmt.Sprintf("%d", p.Amount) +
        " is " + status
}

func main() {
    fmt.Println(describePayment(pymts1))
    fmt.Println(describePayment(pymts2))
}
```

---

## Lesson 5: Slices & Loops

### Slices — Go's version of arrays

```go
payments := []Payment{
    {ReferenceId: "txn1", Amount: 10000, PaymentMethod: "OVO", IsSettled: true},
    {ReferenceId: "txn2", Amount: 20000, PaymentMethod: "DANA", IsSettled: false},
}
```

- `[]Payment` = "slice of Payment" (same as `Payment[]` in TypeScript)

### for range — Go's version of for...of

```go
for _, payment := range payments {
    fmt.Println(payment.ReferenceId)
}
```

- `range payments` — loop through the slice
- `payment` — current item each iteration
- `_` — the index (0, 1, 2...), ignored with `_`
- Use `i` instead of `_` if you need the index: `for i, payment := range payments`

### Accumulating a total

```go
var total int
for _, pymt := range p {
    total += pymt.Amount
}
```

### Important: name your parameters

```go
// Wrong — parameter has no name, can't use it
func getTotalAmount([]Payment) int {
    for _, pymt := range payments {  // uses global variable instead!

// Correct — named parameter, use it inside the function
func getTotalAmount(p []Payment) int {
    for _, pymt := range p {         // uses what was passed in
```

The connection: `payments` (passed in `main`) → received as `p` → looped with `range p`

### Additional Q: What does `p` in `p []Payment` mean?

`p` is just the parameter name — you choose it. Go convention is to use short names:

```go
func getTotalAmount(p []Payment) int { }        // p = short for payments
func getTotalAmount(payments []Payment) int { } // also fine, more descriptive
func getTotalAmount(data []Payment) int { }     // also fine
```

The pattern is always: **name first, type second** — same as TypeScript but without `:`

```go
// Go
func myFunc(p []Payment) int { }

// TypeScript equivalent
function myFunc(p: Payment[]): number { }
```

Always name your parameters — without a name you can't reference the input inside the function.

### Exercise (lesson-5.go)

1. Define `Payment` struct
2. Create a slice of 3 payments at top level
3. Write `getTotalAmount(p []Payment) int` that sums all amounts
4. Call and print in `main()`

```go
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

func getTotalAmount(p []Payment) int {
    var total int
    for _, pymt := range p {
        total += pymt.Amount
    }
    return total
}

func main() {
    fmt.Println(getTotalAmount(payments)) // prints: 60000
}
```

---

## Lesson 6: Error Handling

Go handles errors differently from TypeScript — errors are **return values**, not exceptions.

### TypeScript vs Go

```typescript
// TypeScript — try/catch
try {
    const result = processPayment(50000)
} catch (error) {
    console.log("failed:", error)
}
```

```go
// Go — error as return value
result, err := processPayment(50000)
if err != nil {
    fmt.Println("failed:", err)
}
```

### Returning errors from a function

```go
import "errors"

func processPayment(amount int) (bool, error) {
    if amount <= 0 {
        return false, errors.New("amount must be greater than 0")
    }
    return true, nil   // nil = no error, all good
}
```

- `errors.New("message")` — creates an error
- `return true, nil` — success, no error
- `return false, errors.New(...)` — failure with reason

### nil = no error

- `nil` = "nothing" / "no value" — for errors it means "no error occurred"
- Always check `if err != nil` after calling a function that returns an error

### Multiple return types

```go
func myFunc() (bool, error) { }    // two returns — needs parentheses
func myFunc() string { }           // one return — no parentheses needed
```

The inputs and outputs:
```go
func validatePayment(amount int, method string) (bool, error)
//                  |________________________| |___________|
//                          inputs                outputs
```

### Capturing return values

```go
isValid, err := validatePayment(10000, "OVO")  // capture both
_, err := validatePayment(10000, "OVO")        // ignore bool with _
```

Go forces you to receive all return values — use `_` to intentionally ignore one.

### First call uses :=, subsequent calls use =

```go
isValid, err := validatePayment(1, "OVO")      // first — declare with :=
isValid, err = validatePayment(10000, "OVO")   // next — already declared, use =
```

### Writing a reusable test helper

Instead of repeating `if err != nil` for every test, write a helper function:

```go
func runTest(testname string, amount int, method string) {
    isValid, err := validatePayment(amount, method)
    if err != nil {
        fmt.Println(testname, "failed:", err)
    } else {
        fmt.Println(testname, "success:", isValid)
    }
}

func main() {
    runTest("Test 1", 1, "OVO")        // amount too low
    runTest("Test 2", 10000, "")       // method missing
    runTest("Test 3", 10000000, "OVO") // success
}
```

### Exercise (lesson-6.go)

Write `validatePayment(amount int, method string) (bool, error)` that validates amount >= 10000 and method is not empty. Write a `runTest` helper and call 3 test cases.

```go
package main

import (
    "errors"
    "fmt"
)

func validatePayment(amount int, paymentMethod string) (bool, error) {
    if amount < 10000 {
        return false, errors.New("amount too low")
    } else if paymentMethod == "" {
        return false, errors.New("payment method required")
    }
    return true, nil
}

func runTest(testname string, amount int, method string) {
    isValid, err := validatePayment(amount, method)
    if err != nil {
        fmt.Println(testname, "failed:", err)
    } else {
        fmt.Println(testname, "success:", isValid)
    }
}

func main() {
    runTest("Test 1", 1, "OVO")
    runTest("Test 2", 10000, "")
    runTest("Test 3", 10000000, "OVO")
}
```

---

## Lesson 7: HTTP & APIs

Go has a built-in `net/http` package — no need to install anything.

### Making a GET request

```go
resp, err := http.Get("https://api.example.com/payments")
if err != nil {
    return "", err
}
defer resp.Body.Close()   // always close the connection when done
```

- `http.Get` — sends a GET request, returns response + error
- `defer resp.Body.Close()` — schedules cleanup when function ends, runs even if something goes wrong

### Reading the response body

`resp.Body` is a stream of raw bytes, not text. Use `io.ReadAll` to collect it:

```go
body, err := io.ReadAll(resp.Body)
return string(body), nil   // convert bytes to readable string
```

### Why defer?

`defer` runs the statement at the **end of the function**, no matter what happens:
```go
defer resp.Body.Close()  // closes connection when function exits
```
It's cleanup code — ensures the HTTP connection is always released.

### Always validate inputs before making HTTP calls

```go
if referenceId == "" {
    return "", errors.New("referenceId is required")
}
```

Check params first, then make the network call. Saves unnecessary requests.

### Error messages from HTTP failures

```
dial tcp 34.216.117.25:443: i/o timeout
```
- `dial tcp` — Go tried to open a network connection
- `34.216.117.25:443` — the server IP and port
- `i/o timeout` — server never responded

This is the error you'll see when payment provider APIs are down or unreachable. Your `if err != nil` catches it automatically.

### Additional Q: Should you print errors inside the function?

No — just `return "", err`. Let the caller decide how to handle/print it. Printing inside the function AND returning causes the error to be logged twice.

### Exercise (lesson-7.go)

Write `fetchPaymentStatus(endpoint string, referenceId string) (string, error)` that validates input, makes a GET request, reads and returns the response body.

```go
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
    resp, err := http.Get(endpoint + referenceId) // send GET request
    if err != nil {
        return "", err // stop, return blank + error
    }
    defer resp.Body.Close()            // close connection when done
    body, err := io.ReadAll(resp.Body) // read raw bytes into body
    return string(body), nil           // convert to string, return with nil error
}

func main() {
    fmt.Println(fetchPaymentStatus("https://httpbin.org/get?referenceId=", "test"))
}
```
