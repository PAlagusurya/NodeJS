## Understanding `require` in Node.js

The `require` function in Node.js works as follows:

1. **File Resolution**  
   When you use `require`, Node.js resolves the file based on its type (e.g., `.js`, `.json`, `.node`).

2. **Content Loading and Wrapping**  
   The content of the file is loaded and wrapped inside an Immediately Invoked Function Expression (IIFE).

   - This wrapping ensures that variables with the same name in different modules do not conflict.
   - The IIFE creates a private scope, so each module has its own execution context.

3. **Returning Exports**  
   When the IIFE is executed, it returns the `module.exports` object.  
   This is what gets assigned to the variable when you use `require`, allowing you to use the exported functionality.

4. **Caching**  
   After the module is loaded and executed, its exports are cached.  
   If the same module is required again, the cached version is returned, eliminating the need to resolve and execute it again.

**NOTE**  
Clicking `.` opens the GitHub repository in a code editor interface similar to VS Code, making it easy to navigate through the codebase, explore functions, and review the implementation efficiently.

## NODEJS REPO: https://github.com/nodejs/node/tree/main
