# Go (Golang) Learning Module

## Progress

| Lesson | Concept | Status |
|---|---|---|
| 1 | Variables & data types | Done |
| 2 | Functions | Done |

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
