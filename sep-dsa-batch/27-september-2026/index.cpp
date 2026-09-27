#include <iostream>
using namespace std;

class Student{
    public:
    string name;
    int age;

    Student(){
        name = "Unknown";
        age = 0;
        cout<<"Default Constructor Called"<<endl;
    }

    
    Student(string name, int age){
        cout<<"Constructor Called"<<endl;
        this->name = name;
        this->age = age;
    }

    void display() {
            cout << "Name: " << name << endl;
            cout << "Age: " << age << endl;
    }

    ~Student(){
        cout<<"Destructor Called"<<endl;
    }
};


class BankAccount{
    private:
    double balance;

    public:
    double checkBalance(){
        return balance;
    }

    void setBalance(double amount){
        balance = amount;
    }
};

class Person{
    protected:
    string name;
};


int main() {
    Student s1("Pratham Saxena", 25);
    Student s2;
    s1.display();
    s2.display();
    
    return 0;
}

// 1. Private -> 
// 2. Protected -> Inherited is Introduced 

// protected and private are not same , in private  you can also access the members in inhertied classes

// Copy Constructor -> Home Work!!

// HW -
//  Try to build class for 
// 1. Book
// 2. Person
// 3. Student
// 4. Teacher
// 5. Employee
// 6. Customer
// 7. Product
// 8. Order
// 9. Invoice
// 10. Payment
// 11. Shipping
// 12. Receipt

// One Line Takeaway-?
// Class -> Blue Print
// Encapsulation -> Data Hiding
// Object -> Instance of a Class
// Constructor -> Special Function that is used to initialize objects
// Destructor -> Special Function that is used to destroy objects
// Inheritance -> Ability of a class to inherit properties and methods from another class
// Polymorphism -> Ability of a class to take on multiple forms
// Abstraction -> Ability of a class to hide complex details and show only essential features
// Encapsulation -> Ability of a class to hide complex details and show only essential features
// Encapsulation -> Ability of a class to hide complex details and show only essential features