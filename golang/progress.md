# Go Learning Progress

## Lessons Completed

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

## What you did well

- Quickly spotted the difference between `var` and `:=` and when to use each
- Added comments explaining your own understanding — very good habit
- Naturally wrote a `runTest` helper to avoid repetition (Lesson 6)
- Added input validation before HTTP calls without being prompted (Lesson 7)
- Tested error scenarios yourself (invalid URL, empty referenceId)
- Understood why `fmt.Println` inside a function causes double logging

## Areas to watch

- Go functions must be at top level — took a couple tries to get this right
- `} else if` must be on the same line as `}` — Go is strict about this
- Parameter naming — always name your parameters or you can't use them inside the function
- Multiple return types need `( )` and a comma: `(string, error)` not `(string error)`
- Import syntax uses `( )` not `{ }`

## Key Go vs TypeScript differences to remember

| Concept | TypeScript | Go |
|---|---|---|
| Function | `function name()` | `func name()` |
| Types | `name: type` | `name type` |
| Return type | `: returnType` after `()` | `returnType` after `()` |
| Object shape | `type X = {}` | `type X struct {}` |
| Array | `Type[]` | `[]Type` |
| Loop | `for (const x of arr)` | `for _, x := range arr` |
| Error handling | `try/catch` | `result, err := func(); if err != nil {}` |
| No value | `null` | `nil` |
| No ternary | `condition ? a : b` | not available — use `if/else` |
