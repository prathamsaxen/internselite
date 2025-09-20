### Library Management System

---

## Problem Statement

Develop a **console-based Library Management System** in C++ that allows a librarian to manage a collection of books. The system should be able to perform basic operations such as adding a new book, removing an existing book, and searching for books. This project is designed to help you practice core C++ concepts, including object-oriented programming, data structures, and file handling.

The primary data structure for storing the book information will be a **singly linked list**. This choice is ideal because the number of books in a library is dynamic, and a linked list provides efficient insertion and deletion of nodes (books) without the overhead of reallocating memory for a fixed-size array.

## Feature Requirements

1.  **Book Representation**: Each book in the system should be represented as an object or struct containing the following attributes:
    * Book ID (integer)
    * Title (string)
    * Author (string)
    * ISBN (string)
    * Publication Year (integer)

2.  **Linked List Implementation**: Implement a singly linked list from scratch to manage the book objects. The list should have a `head` pointer and methods for the required operations.

3.  **Core Operations**: The program must support the following functionalities through a user-friendly menu:
    * **Add a New Book**: Prompt the user for a book's details and add it to the linked list. The new book can be added to the end of the list.
    * **Remove a Book**: Allow the user to remove a book by its Book ID. The program should search for the book and remove the corresponding node from the linked list.
    * **Search for a Book**: Enable the user to search for a book by its title or author. The program should display the details of all matching books.
    * **Display All Books**: Print the details of all books currently in the linked list.
    * **Save and Load Data**: The system should be able to save the entire book collection to a file and load it from the file upon startup. This will ensure that the data is persistent between program executions.

### Customer Service Simulation

---

## Problem Statement

Create a **console-based simulation** of a customer service center using C++. The program should model customers arriving at a queue and being served by a limited number of representatives. The goal of this project is to apply the **queue data structure** to simulate a real-world scenario, helping you understand its **First-In, First-Out (FIFO)** nature.

The simulation should demonstrate how customers are added to the queue as they arrive and are then served by representatives in the order they joined the queue.

## Feature Requirements

1.  **Customer Representation**: A customer can be represented by a simple struct or object with attributes like a unique ID and an arrival time.

2.  **Queue Implementation**: Implement a queue data structure, either using a linked list or an array, to manage the customers. The queue should support the following operations:
    * `enqueue()`: To add a new customer to the back of the queue.
    * `dequeue()`: To remove a customer from the front of the queue when a representative becomes free.
    * `isEmpty()`: To check if the queue is empty.

3.  **Simulation Logic**: The program should simulate the passage of time in discrete steps (e.g., minutes). At each time step, the following actions should occur:
    * **Customer Arrival**: Randomly decide if a new customer arrives and add them to the queue. You can control the arrival rate to make the simulation more realistic.
    * **Service Representatives**: A fixed number of service representatives (e.g., 3) are available to serve customers.
    * **Serving Customers**: If a representative is free and the queue is not empty, they should `dequeue` the next customer and begin serving them.
    * **Service Time**: Each customer requires a random amount of time to be served. Once service is complete, the representative becomes free.

4.  **Display Output**: At each time step, the program should display the current status of the simulation, including:
    * The total number of customers currently in the queue.
    * The number of busy representatives.
    * The ID of the customer being served by each representative and their remaining service time.
    * The total number of customers served so far.