# Traffic Signal System - Project Task

## 🚦 Project Overview

Build a **Traffic Signal System** using C++ that simulates vehicle management at a traffic signal. The system should use a **Queue** data structure (implemented using Linked List) to manage vehicles in a First-In-First-Out (FIFO) manner.

## 🎯 Learning Objectives

- Implement and understand Queue data structure
- Understand FIFO (First-In-First-Out) principle
- Practice Linked List implementation
- Handle dynamic memory allocation
- Create an interactive menu-driven program
- Simulate real-world queue scenarios

## ✨ Required Features

Your Traffic Signal System must implement the following features:

### 1. **Vehicle Arrives**
   - Add a new vehicle to the queue
   - Vehicle should have: Vehicle Number, Vehicle Type
   - Vehicles join at the rear of the queue
   - Display confirmation message

### 2. **Green Signal**
   - Allow the first vehicle (front of queue) to pass
   - Remove the vehicle from the queue (FIFO principle)
   - Display which vehicle passed
   - Handle case when no vehicles are waiting

### 3. **Display Vehicles**
   - Show all vehicles currently waiting in the queue
   - Display: Vehicle Number and Vehicle Type
   - Show appropriate message if queue is empty

### 4. **Exit**
   - Gracefully exit the program
   - Clean up any allocated memory

## 🏗️ Implementation Requirements

### Data Structure
- Use a **Queue** implemented with a **Linked List**
- Queue should follow FIFO (First-In-First-Out) principle
- Maintain `front` and `rear` pointers
- Each node should represent a vehicle with:
  - `vehicleNumber` (integer)
  - `type` (string) - e.g., "Car", "Bike", "Truck", "Bus"
  - `next` (pointer to next vehicle)

### Classes to Implement

1. **Vehicle Class**
   - Attributes: vehicleNumber, type, next pointer
   - Constructor to initialize vehicle details

2. **TrafficSignal Class**
   - Private: front and rear pointers
   - Public methods:
     - `vehicleArrives()` - Enqueue operation
     - `greenSignal()` - Dequeue operation
     - `displayVehicles()` - Display all waiting vehicles

### Queue Operations

1. **Enqueue (vehicleArrives)**
   - Add vehicle at the rear
   - If queue is empty, set both front and rear to new vehicle
   - Otherwise, add after rear and update rear pointer

2. **Dequeue (greenSignal)**
   - Remove vehicle from the front
   - Update front pointer
   - If queue becomes empty, set rear to nullptr
   - Properly deallocate memory

3. **Display**
   - Traverse from front to rear
   - Display all vehicles in queue order

### Program Structure
- Menu-driven interface
- Input validation
- Clear user prompts
- Error handling for edge cases
- Memory leak prevention

## 📋 Sample Menu

```
Traffic Signal System
1. Vehicle Arrives
2. Green Signal
3. Display Vehicles
4. Exit
Enter your choice:
```

## 🎨 Bonus Features (Optional)

- Add vehicle priority (emergency vehicles go first)
- Add timestamp for when vehicle arrived
- Calculate average waiting time
- Add different signal types (Red, Yellow, Green)
- Add vehicle count statistics
- Simulate automatic signal timing
- Add vehicle categories (2-wheeler, 4-wheeler, heavy vehicle)

## 🧪 Testing Checklist

Test your implementation with the following scenarios:

- [ ] Add first vehicle to empty queue
- [ ] Add multiple vehicles (should join at rear)
- [ ] Display vehicles when queue is empty
- [ ] Display vehicles when queue has items
- [ ] Green signal when queue is empty (should show message)
- [ ] Green signal when queue has one vehicle
- [ ] Green signal when queue has multiple vehicles (FIFO order)
- [ ] Verify FIFO: First vehicle added should be first to pass
- [ ] Add vehicles after some have passed
- [ ] Exit program gracefully

## 💡 Implementation Tips

1. **Queue Implementation**
   - Maintain both `front` and `rear` pointers
   - Enqueue at rear, dequeue from front
   - When queue is empty, both pointers should be `nullptr`

2. **Memory Management**
   - Always delete nodes when removing vehicles
   - Set pointers to `nullptr` after deletion
   - Check for null pointers before dereferencing

3. **Edge Cases**
   - Empty queue (both front and rear are nullptr)
   - Single vehicle in queue
   - Multiple vehicles in queue

4. **FIFO Principle**
   - First vehicle to arrive should be first to pass
   - Test with sequence: Add A, Add B, Add C → Green should pass A, then B, then C

5. **Input Handling**
   - Validate user input for menu choices
   - Handle invalid inputs gracefully
   - Accept vehicle type as string

## 📝 Deliverables

1. Complete C++ source code file (`index.cpp` or `main.cpp`)
2. Code should compile without errors
3. All required features must be implemented
4. Code should be well-commented and readable
5. Queue must follow FIFO principle correctly

## 🚀 Getting Started

1. Create a new C++ file
2. Include necessary headers: `<iostream>`, `<string>`
3. Define the Vehicle class
4. Define the TrafficSignal class with queue operations
5. Implement the main function with menu loop
6. Test FIFO behavior thoroughly

## 🔍 Understanding Queue vs Stack

**Queue (FIFO)** - Used in this project:
- First vehicle to arrive → First vehicle to pass
- Like a line at a ticket counter

**Stack (LIFO)** - NOT used here:
- Last in → First out
- Like a stack of plates

## 📚 Concepts Covered

- Queue Data Structure
- FIFO (First-In-First-Out) Principle
- Linked List Implementation
- Pointers and Dynamic Memory
- Object-Oriented Programming
- Class and Objects
- Encapsulation
- Menu-driven Programming
- Real-world Simulation

## 🎓 Real-World Applications

Queues are used in:
- Traffic management systems
- Printer job scheduling
- CPU task scheduling
- Call center systems
- Network packet routing
- Operating system process scheduling

---

**Good luck with your project! 🎉**
