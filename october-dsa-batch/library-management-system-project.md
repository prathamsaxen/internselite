# Library Management System - Project Task

## 📚 Project Overview

Build a **Library Management System** using C++ that allows users to manage a collection of books. The system should use a **Linked List** data structure to store and manage books efficiently.

## 🎯 Learning Objectives

- Implement and understand Linked List data structure
- Practice Object-Oriented Programming (OOP) concepts
- Handle dynamic memory allocation
- Create an interactive menu-driven program
- Implement CRUD (Create, Read, Update, Delete) operations

## ✨ Required Features

Your Library Management System must implement the following features:

### 1. **Add Book**
   - Add a new book to the library
   - Book should have: ID, Title, Author
   - Check for duplicate book IDs
   - Display success/error messages

### 2. **Remove Book**
   - Remove a book from the library by ID
   - Handle cases where book doesn't exist
   - Properly deallocate memory

### 3. **Search Book**
   - Search for a book by ID
   - Display book details: ID, Title, Author, Borrowed Status
   - Show appropriate message if book not found

### 4. **Borrow Book**
   - Mark a book as borrowed
   - Check if book is already borrowed
   - Update the book's status

### 5. **Return Book**
   - Mark a borrowed book as returned
   - Check if book is already returned
   - Update the book's status

### 6. **Display All Books**
   - Show all books in the library
   - Display: ID, Title, Author, Borrowed Status
   - Handle empty library case

### 7. **Exit**
   - Gracefully exit the program
   - Clean up any allocated memory

## 🏗️ Implementation Requirements

### Data Structure
- Use a **Linked List** to store books
- Each node should represent a book with the following properties:
  - `id` (integer)
  - `title` (string)
  - `author` (string)
  - `isBorrowed` (boolean)
  - `next` (pointer to next book)

### Classes to Implement

1. **Book Class**
   - Attributes: id, title, author, isBorrowed, next pointer
   - Constructor to initialize book details

2. **Library Class**
   - Private: head pointer to the linked list
   - Public methods for all operations
   - Proper memory management (delete nodes when removing)

### Program Structure
- Menu-driven interface
- Input validation
- Clear user prompts
- Error handling for edge cases
- Memory leak prevention

## 📋 Sample Menu

```
========= Library Menu =========
1. Add Book
2. Remove Book
3. Search Book
4. Borrow Book
5. Return Book
6. Display All Books
7. Exit
Enter your choice:
```

## 🎨 Bonus Features (Optional)

- Add colored output for better UI experience
- Add book count statistics
- Search by title or author (not just ID)
- Sort books by ID, title, or author
- Save/load books from a file
- Add due date for borrowed books

## 🧪 Testing Checklist

Test your implementation with the following scenarios:

- [ ] Add multiple books
- [ ] Try to add duplicate book ID (should show error)
- [ ] Remove a book from the beginning
- [ ] Remove a book from the middle
- [ ] Remove a book from the end
- [ ] Remove a non-existent book (should show error)
- [ ] Search for existing book
- [ ] Search for non-existent book
- [ ] Borrow an available book
- [ ] Try to borrow an already borrowed book
- [ ] Return a borrowed book
- [ ] Try to return an already returned book
- [ ] Display books when library is empty
- [ ] Display books when library has items
- [ ] Exit program gracefully

## 💡 Implementation Tips

1. **Memory Management**
   - Always delete nodes when removing books
   - Set pointers to `nullptr` after deletion
   - Check for null pointers before dereferencing

2. **Edge Cases**
   - Empty library (head is nullptr)
   - Single book in library
   - Book at the beginning, middle, or end of list

3. **Input Handling**
   - Use `cin.ignore()` after reading integers to handle string inputs
   - Validate user input for menu choices
   - Handle invalid inputs gracefully

4. **Code Organization**
   - Separate class definitions
   - Use meaningful variable names
   - Add comments for complex logic

## 📝 Deliverables

1. Complete C++ source code file (`index.cpp` or `main.cpp`)
2. Code should compile without errors
3. All required features must be implemented
4. Code should be well-commented and readable

## 🚀 Getting Started

1. Create a new C++ file
2. Include necessary headers: `<iostream>`, `<string>`, `<limits>`
3. Define the Book class
4. Define the Library class with all methods
5. Implement the main function with menu loop
6. Test each feature thoroughly

## 📚 Concepts Covered

- Linked Lists (Singly Linked List)
- Pointers and Dynamic Memory
- Object-Oriented Programming
- Class and Objects
- Encapsulation
- Menu-driven Programming
- Input/Output Handling

---

**Good luck with your project! 🎉**
