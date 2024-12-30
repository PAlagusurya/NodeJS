## Modules

This project supports two types of modules: **CommonJS (CJS)** and **ECMAScript Modules (ESM)**.

### Key Features

1. **Scoped Variables and Functions**  
   Modules encapsulate their variables and functions, preventing them from leaking into the global scope. This ensures that variables of the same name can coexist in different modules unless explicitly imported/exported.

2. **Export-Import Mechanism**  
   A module's content can only be used in another module by exporting it in the source module and importing it where needed.

### Differences between CJS and ESM

| Feature             | CommonJS (CJS)                                                  | ECMAScript Modules (ESM)              |
| ------------------- | --------------------------------------------------------------- | ------------------------------------- |
| **Usage**           | Older method, primarily used in Node.js                         | Modern method, used in modern JS apps |
| **Execution Style** | Synchronous                                                     | Asynchronous                          |
| **Strict Mode**     | Non-strict by default (e.g., no error for undeclared variables) | Always runs in strict mode            |
| **Exports**         | Uses `module.exports`                                           | Uses `export` syntax                  |
| **File Extension**  | Typically `.js`                                                 | Typically `.mjs`                      |

### Notes on `package.json`

- By default, Node.js assumes **CommonJS** modules (`type: "commonjs"`).
- To use **ECMAScript Modules**, specify `"type": "module"` in your `package.json` file:

  ```json
  {
    "type": "module"
  }
  ```

- what is a module?
  A module is an independent and isolated collection of code that organizes functionality within its own private scope.
