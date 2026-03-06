# TypeScript Learning Progress

## Lessons Completed

### Lesson 1 — Variables & Data Types (`lesson-1.ts`)
- `const` = value never changes, `let` = value can change
- Basic types: `string`, `number`, `boolean`
- Type annotation syntax: `const name: type = value`
- `//` = comment, TypeScript ignores it
- `console.log()` = print values to screen

### Lesson 2 — Functions (`lesson-2.ts`)
- Functions are reusable blocks of code
- Parameters go inside `()` with their types
- Return type declared after `)` with `: type`
- `return` sends the result back to the caller

### Lesson 3 — Conditions (`lesson-3.ts`)
- `if / else if / else` for decision making
- Comparison operators: `===`, `!==`, `>`, `<`, `>=`, `<=`
- `&&` = AND, `||` = OR
- Variables defined outside a function are accessible inside it

### Lesson 4 — Objects & Types (`lesson-4.ts`)
- `type` defines the shape of an object (use PascalCase e.g. `Payment`)
- Properties inside `type` use `:` not `=`
- Object values use `:` to pair key and value (like JSON)
- `export` makes a type/function available to other files
- Ternary operator: `condition ? "if true" : "if false"` — shorthand for simple if/else

### Lesson 5 — Arrays & Loops (`lesson-5.ts`)
- `Type[]` = array of that type (e.g. `Payment[]`)
- Arrays are indexed from 0
- `for (const item of array) {}` = loop through every item
- `let` required for variables that change value (e.g. accumulators)
- `+=` adds to an existing value: `sumCalc += payment.amount`

---

## Key Syntax Rules Learned

| Syntax | Used for |
|---|---|
| `: type` | Declaring what type something is |
| `= value` | Assigning the actual value |
| `{ }` inside object | Key-value pairs using `:` |
| `{ }` in functions/if | Grouping logic that belongs together |
| `export` | Share from a file |
| `import { X } from "./file"` | Use something from another file (needs project setup) |

---

## Next Up
- Lesson 6: Project setup (package.json, tsconfig.json) — enables running files and proper imports
