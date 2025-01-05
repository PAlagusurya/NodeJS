## Node.js and its Execution Model

Node.js uses the **V8 engine**, which is capable of performing **synchronous tasks** efficiently. However, when Node.js encounters asynchronous operations like:

- File handling
- Timers
- Database connections

It **offloads these tasks to `libuv`**.

### What is `libuv`?

`libuv` is a library written in C that enables Node.js to perform **asynchronous I/O operations**. It is highly capable of interacting with the operating system, which allows Node.js to handle non-blocking tasks effectively.

### How it Works:

1. When an asynchronous operation is offloaded to `libuv`, a **callback** is attached to it.
2. Once the operation is completed, the callback is pushed onto the **call stack** and executed.

This event-driven, non-blocking architecture is what makes Node.js suitable for building high-performance, scalable applications.
