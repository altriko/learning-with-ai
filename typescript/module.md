# TypeScript Learning Module

## Progress

| Lesson | Concept | Status |
|---|---|---|
| 1 | Variables & data types | Done |
| 2 | Functions | Done |
| 3 | Conditions (if/else) | Done |
| 4 | Objects & types | Done |
| 5 | Arrays & loops | Done |
| 6 | Project setup | Done |
| 7 | Array methods (filter, map) | Done |
| 8 | How code is structured | Done |

---

## Lesson 1: Variables & Data Types

A variable is a labeled box that stores information.

```typescript
const amount = 50000
```

- `const` — value will NOT change
- `let` — value CAN change

```typescript
let status = "pending"
status = "success"  // allowed because we used let
```

### Data Types

| Type | Example | Used for |
|---|---|---|
| `number` | `50000` | amounts, counts |
| `string` | `"pending"` | text, IDs, names |
| `boolean` | `true` / `false` | yes/no states |

Declare type explicitly using `:`:

```typescript
const amount: number = 50000
const currency: string = "IDR"
const isSuccess: boolean = true
```

- `//` = comment, TypeScript ignores it
- `console.log()` = print values to screen

### Exercise (lesson-1.ts)

Write 3 variables:
1. A transaction ID (text)
2. A payment amount in IDR (number)
3. Whether the payment is complete (yes/no)

```typescript
const referenceId: string = "test-data-123"
const amount: number = 50000
const currency: string = "IDR"
const isCompleted: boolean = true

console.log(referenceId, amount, currency, isCompleted)
```

---

## Lesson 2: Functions

A function is a reusable block of code. Think of it like an SOP — define the steps once, call it whenever needed.

```typescript
function greet(name: string) {
  console.log("Hello, " + name)
}

greet("Altriko") // prints: Hello, Altriko
```

Functions can return a value:

```typescript
function calculateFee(amount: number): number {
  const feePercent = 0.02
  return amount * feePercent
}
```

- Parameters go inside `()`
- Return type declared after `)` with `: type`
- `return` sends the result back to the caller

### Exercise (lesson-2.ts)

Write a function called `calculateTotal` that:
1. Takes two inputs: `amount` (number) and `feePercent` (number)
2. Calculates the total = amount + (amount x feePercent)
3. Returns the total
4. Call the function with `100000` and `0.015` (1.5% fee) and `console.log` the result

```typescript
function calculateTotal(
    amount: number,
    feePercent: number
): number {
    const total = amount + (amount * feePercent)
    return total
}

console.log(calculateTotal(100000, 0.015)) // prints: 101500
```

---

## Lesson 3: Conditions (if/else)

Conditions let code make decisions.

```typescript
if (condition) {
  // runs when TRUE
} else if (otherCondition) {
  // runs when first is false, this is true
} else {
  // runs when all above are false
}
```

### Comparison operators

| Operator | Meaning |
|---|---|
| `===` | exactly equal |
| `!==` | not equal |
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal |
| `<=` | less than or equal |

- `&&` = AND (both must be true)
- `||` = OR (at least one must be true)

### Key rules

- `else if` — not `if else`
- `else` never has a condition
- Use `&&` / `||` not `AND` / `OR`

### Exercise (lesson-3.ts)

Write a function called `checkPaymentLimit` that:
1. Takes one input: `amount` (number)
2. If amount is **above 50,000,000** → return `"requires manual review"`
3. If amount is **between 10,000 and 50,000,000** → return `"auto approved"`
4. If amount is **below 10,000** → return `"amount too low"`
5. Call the function 3 times with different amounts and `console.log` each result

```typescript
const upThreshold: number = 50000000
const downThreshold: number = 10000

function checkPaymentLimit(amount: number): string {
    if (amount > upThreshold) {
        return "requires manual review"
    } else if (amount >= downThreshold && amount <= upThreshold) {
        return "auto approved"
    } else {
        return "amount too low"
    }
}

console.log(checkPaymentLimit(100000000)) // requires manual review
console.log(checkPaymentLimit(50000))     // auto approved
console.log(checkPaymentLimit(5000))      // amount too low
```

---

## Lesson 4: Objects & Types

Objects group related data together.

```typescript
type Payment = {
    referenceId: string
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const txn1: Payment = {
    referenceId: "txn1",
    amount: 10000,
    paymentMethod: "Cards",
    isSettled: true
}
```

- `type` defines the shape (use PascalCase)
- Inside `type` — use `:` only
- Inside object value — use `:` between key/value, `,` after each property
- Access properties with `.`: `txn1.amount`

### Ternary operator

Shorthand if/else for simple 2-option decisions:

```typescript
// Regular
if (isSettled) { status = "settled" } else { status = "not settled" }

// Ternary
const status = isSettled ? "settled" : "not settled"
```

Structure: `condition ? "if true" : "if false"`

Use regular `if/else if` for 3+ options.

### Additional Q: When to use `:` vs `=` vs `{}`

| Symbol | Used for | Example |
|---|---|---|
| `:` | "is of type" | `const amount: number` |
| `=` | "value is" | `const amount = 50000` |
| `{}` in type/object | key-value pairs | `{ amount: 50000 }` |
| `{}` in functions/if | grouping logic | `function pay() { ... }` |

A variable declaration uses both: `const amount: number = 50000`
- `:` = declares the type
- `=` = assigns the value

### export / import

```typescript
// In lesson-4.ts
export type Payment = { ... }

// In lesson-5.ts
import { Payment } from "./lesson-4"
```

Requires project setup (see Lesson 6).

### Exercise (lesson-4.ts)

1. Create a `type` called `Payment` with these fields: `referenceId` (string), `amount` (number), `paymentMethod` (string), `isSettled` (boolean)
2. Create 2 objects using that type with realistic data
3. Write a function called `describePayment` that takes a `Payment` object and returns a string like `"Payment txn-001 via QRIS for 75000 IDR - settled"`
4. Call the function on both objects and `console.log` the results

```typescript
export type Payment = {
    referenceId: string
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const txn1: Payment = { referenceId: "txn1", amount: 10000, paymentMethod: "Cards", isSettled: true }
const txn2: Payment = { referenceId: "txn2", amount: 50000, paymentMethod: "DANA", isSettled: false }

function describePayment(payment: Payment): string {
    return "Payment " + payment.referenceId + " via " + payment.paymentMethod +
        " with amount of " + payment.amount + " is " +
        (payment.isSettled ? "settled" : "not settled")
}

console.log(describePayment(txn1))
console.log(describePayment(txn2))
```

---

## Lesson 5: Arrays & Loops

An array is an ordered list of values.

```typescript
const amounts: number[] = [10000, 50000, 150000]

console.log(amounts[0])  // 10000 (index starts at 0)
```

Array of objects:

```typescript
const payments: Payment[] = [
    { referenceId: "txn1", amount: 10000, paymentMethod: "DANA", isSettled: true },
    { referenceId: "txn2", amount: 20000, paymentMethod: "OVO", isSettled: false },
]
```

### for...of loop

Runs code once for each item in the array:

```typescript
for (const payment of payments) {
    console.log(payment.referenceId)
}
```

### Accumulating a total

```typescript
let sumCalc: number = 0
for (const payment of payments) {
    sumCalc += payment.amount  // adds each amount to running total
}
```

- Use `let` (not `const`) for values that change in the loop
- `+=` means "add to existing value"
- Loop variable name must differ from array name

### Exercise (lesson-5.ts)

1. Reuse the `Payment` type from lesson 4 (redefine it)
2. Create an array of 3 payments
3. Write a function `getTotalAmount` that takes a `Payment[]` array and returns the sum of all amounts
4. `console.log` the total

```typescript
type Payment = {
    referenceId: string
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const paymentArray: Payment[] = [
    {referenceId: "txn1", amount: 10000, paymentMethod: "DANA", isSettled: true},
    {referenceId: "txn2", amount: 20000, paymentMethod: "OVO", isSettled: false},
    {referenceId: "txn3", amount: 30000, paymentMethod: "QRIS", isSettled: true}
]

function getTotalAmount(payments: Payment[]): number {
    let sumCalc: number = 0
    for (const payment of payments) {
        sumCalc += payment.amount
    }
    return sumCalc
}

console.log(getTotalAmount(paymentArray)) // prints: 60000
```

---

## Lesson 6: Project Setup

### What each file does

| File | Purpose |
|---|---|
| `package.json` | Project identity card — name, version, dependencies |
| `package-lock.json` | Exact record of what was installed. Never edit manually. |
| `node_modules/` | Folder containing all installed tools. Never touch manually. |

### Setup commands

```bash
npm init -y                      # creates package.json automatically
npm install -D typescript tsx    # installs TypeScript and tsx
```

- `-D` means "dev dependency" — tools used during development, not in production

### Running TypeScript files

```bash
npx tsx typescript/lesson-5.ts
```

### npm scripts shortcut

Add shortcuts in `package.json` under `"scripts"`:

```json
"scripts": {
  "lesson5": "tsx typescript/lesson-5.ts"
}
```

Then run with `npm run lesson5`. This is how real projects define `npm run dev`, `npm run build`, etc.

### Additional Q: npm vs npx vs tsx

| Tool | Purpose |
|---|---|
| `npm` | Install packages, run defined scripts |
| `npx` | Directly run a tool without defining a script |
| `tsx` | Translates and runs `.ts` files on the fly |

```bash
npm install tsx                          # install a package
npm run lesson5                          # run a script from package.json
npx tsx typescript/lesson-5.ts          # run a file directly
```

How to read `npx tsx typescript/lesson-5.ts`:
- `npx` = go find and execute this tool
- `tsx` = the tool that runs `.ts` files
- `typescript/lesson-5.ts` = the file to run

Normally `node` only understands plain JavaScript. `tsx` bridges that gap by translating TypeScript before running it.

---

## Lesson 7: Array Methods (filter, map)

Instead of `for...of`, real codebases use built-in array methods to transform arrays in one line.

### filter — keep only items that match a condition

```typescript
const settledPayments = payments.filter(payment => payment.isSettled === true)
// returns only items where isSettled is true
```

Reading it: "give me all `payment`s where `isSettled` is true"

### map — transform every item into something new

```typescript
const amounts = payments.map(payment => payment.amount)
// input:  [{...}, {...}, {...}]   <- 3 objects
// output: [10000, 20000, 30000]  <- 3 numbers
```

Reading it: "for each `payment`, give me just the `amount`"

More map examples:

```typescript
// Convert to USD
const amountsInUSD = payments.map(payment => payment.amount / 16000)

// Build a new smaller object
const summaries = payments.map(payment => {
    return { id: payment.referenceId, method: payment.paymentMethod }
})
```

### filter vs map

| Method | What it does | Output size |
|---|---|---|
| `filter` | keeps items that match a condition | smaller or equal |
| `map` | transforms every item into something new | always same size |

- `filter` = decide **which items** to keep
- `map` = decide **what shape** each item becomes

### Arrow function `=>`

Array methods use arrow functions — a short way to write a small inline function:

```typescript
// Regular function
function getAmount(payment) { return payment.amount }

// Same thing as arrow function
payment => payment.amount
```

### Negating a boolean with `!`

`!` before a boolean flips it. Used in filter to get the opposite:

```typescript
payments.filter(payment => !payment.isSettled)  // isSettled = false
payments.filter(payment => payment.isSettled)   // isSettled = true
```

### Chaining — combine filter + map

```typescript
const settledAmounts = payments
    .filter(payment => payment.isSettled)
    .map(payment => payment.amount)
// result: only amounts from settled payments
```

### Additional Q: type: "module" in package.json

There are two systems for import/export in JavaScript:

| Setting | Import style | Era |
|---|---|---|
| `"type": "commonjs"` | `require()` | Old |
| `"type": "module"` | `import` | Modern |

Since TypeScript uses `import/export`, set `"type": "module"` in `package.json`. Without it, Node.js doesn't understand the `import` keyword.

When using ES modules, import paths need the `.ts` extension:
```typescript
import { Payment } from "./lesson-4.ts"
```

### Exercise (lesson-7.ts)

1. Reuse the `Payment` type (redefine it)
2. Create an array of 4 payments (mix of settled/unsettled, different methods)
3. Use `filter` to get only unsettled payments, `console.log` the result
4. Use `map` to get a list of just the referenceIds, `console.log` the result
5. Combine: get the amounts of only settled payments, `console.log` the result

```typescript
type Payment = {
    referenceId: string
    amount: number
    paymentMethod: string
    isSettled: boolean
}

const payments: Payment[] = [
    {referenceId: "txn1", amount: 10000, paymentMethod: "OVO", isSettled: true},
    {referenceId: "txn2", amount: 20000, paymentMethod: "DANA", isSettled: false},
    {referenceId: "txn3", amount: 30000, paymentMethod: "SHOPEEPAY", isSettled: true},
    {referenceId: "txn4", amount: 40000, paymentMethod: "QRIS", isSettled: false}
]

const unsettledPayments = payments.filter(payment => !payment.isSettled)
console.log("1. Unsettled:", unsettledPayments)

const referenceIds = payments.map(payment => payment.referenceId)
console.log("2. Reference IDs:", referenceIds)

const settledAmounts = payments
    .filter(payment => payment.isSettled)
    .map(payment => payment.amount)
console.log("3. Settled amounts:", settledAmounts)
```

---

## Lesson 8: How Code is Structured

Real projects split code across folders. Each folder has one responsibility.

### Typical structure

```
src/
├── types/          ← type definitions only
│   └── payment.ts
├── utils/          ← small reusable functions
│   └── calculate.ts
├── services/       ← business logic
│   └── paymentService.ts
└── index.ts        ← entry point, ties everything together
```

### How files talk to each other

```
index.ts
  → imports from paymentService.ts
      → imports from calculate.ts (utils)
      → imports from payment.ts (types)
```

Each file only knows about the files it directly imports.

### import type vs import

- `import { processPayments }` — for importing **values** (functions, variables)
- `import type { Payment }` — for importing **types only**

Types don't exist at runtime (TypeScript erases them). So ES modules can't find them with a regular `import`. Use `import type` for types.

### Why importing a file runs its code

When you write `import { x } from "./file.ts"`, Node runs the **entire file** first, then gives you what you asked for. So if a file has `console.log` at the bottom, it will run every time it's imported.

**Rule:** files that export things should only contain definitions (types, functions). Never put running code (`console.log`, test data) in files meant to be imported. All running code lives in `index.ts` — the entry point.

### Exercise (structured/)

```
structured/
├── types/payment.ts        ← export type Payment
├── utils/calculate.ts      ← export function calculateTotal
├── services/paymentService.ts ← export function processPayments
└── index.ts                ← import and run everything
```

`processPayments` filters settled payments, applies fee via `calculateTotal`, returns totals.
Running `npx tsx structured/index.ts` outputs `[ 11000 ]`.

---

## Syntax Quick Reference

| Syntax | Used for |
|---|---|
| `const name: type = value` | Declare a variable |
| `let name: type = value` | Declare a changeable variable |
| `function name(param: type): returnType {}` | Define a function |
| `type Name = { field: type }` | Define object shape |
| `const obj: Type = { field: value }` | Create an object |
| `const arr: Type[] = [...]` | Create an array |
| `for (const item of array) {}` | Loop through array |
| `export` | Share from a file |
| `import { X } from "./file"` | Use from another file |
