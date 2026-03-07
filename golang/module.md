# Go (Golang) Learning Module

## Progress

| Lesson | Concept | Status |
|---|---|---|
| 1 | Variables & data types | Done |
| 2 | Functions | Done |
| 3 | Conditions (if/else, switch) | Done |
| 4 | Structs | Done |

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
