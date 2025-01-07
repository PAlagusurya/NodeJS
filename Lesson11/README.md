# Client-Server Architecture Overview

An introduction to the fundamental concepts of client-server architecture, including communication protocols, data transmission, and application handling on a server.

---

## Table of Contents

1. [Overview](#overview)
2. [Key Concepts](#key-concepts)
3. [Data Transmission](#data-transmission)
4. [Server and Applications](#server-and-applications)
5. [Contact](#contact)

---

## Overview

Client-server architecture is a model where clients (devices or applications) request resources or services from a server. The communication between the client and server is facilitated using IP addresses, protocols, and ports.

---

## Key Concepts

1. **IP Address for Communication**:

   - Both client and server have unique IP addresses that enable them to identify and communicate with each other.

2. **Rules for Communication**:

   - Communication follows rules defined by the **Transmission Control Protocol (TCP)**, ensuring reliable transmission of data.

3. **Protocols Used**:
   - Common protocols include:
     - **HTTP** for web communication.
     - **SMTP** for email.
     - **FTP** for file transfers.

---

## Data Transmission

- **Sockets**:

  - When a client sends a request, a **socket** opens for data transfer.
  - The socket closes once the data transfer is complete.

- **Packets and TCP**:
  - Data is sent in **packets** in a **stream** of buffered data.
  - TCP manages the sending, reordering, and error-checking of these packets.

---

## Server and Applications

- **Multiple Applications**:

  - A server can host multiple applications, each assigned a unique **port number**.

- **Identifying the Application**:
  - The client's request includes the server's IP address and a **port number**, which specifies the intended
