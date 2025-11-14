// #include<iostream>
// #include<string>

// using namespace std;


// struct node{

//     int data;
//     node* next;

//     node(int data)
//     {
//         this->data=data;
//     }
// };


// int main(){


//     // string name = "Pratham Saxena";
//     // string* data = &name;
//     // string testCase = "P R A T H A M";
//     // testCase=name;
//     // // for(int index=0;index<name.size();index++)
//     // // {
//     // //     cout<<name[index]<<endl;
//     // // }
//     // // Reverese a String 
//     // reverse(name.begin(),name.end());
//     // testCase.erase(remove(testCase.begin(),testCase.end(), ' '));
//     // cout<<testCase<<endl;


//     // Pointers Concept
//     // cout<<"Name - "<<name<<endl;
//     // cout<<"Memory Address of Name - "<<&name<<endl;
//     // cout<<"Memory Address of Name - "<<data<<endl;
//     // // Dereferencing
//     // cout<<"Memory Address again dereferenced - "<<*data<<endl;

//     // int age=10;
//     // int* ptr=NULL;
//     // ptr=&age;


//     // cout<<ptr<<endl;

//     // Dynamic Memory Allocation
//     // Using new and Delete

//     // int* p = new int(10);

//     // cout<<p<<endl;
//     // delete p;
//     // cout<<p<<endl;
//     node* head=new node(10);
//     node* second=new node(20);

//     head->next = second;
//     second->next=NULL;


//     return 0;
// }

#include <iostream>
using namespace std;

struct node {
    int data;
    node* next;

    // Constructor
    node(int data) {
        this->data = data;
        this->next = NULL;   // Always initialize next pointer
    }
};

int main() {

    // Creating Linked List nodes
    node* head = new node(10);
    node* second = new node(20);
    node* third = new node(30);

    // Linking nodes
    head->next = second;
    second->next = third;
    third->next = NULL;

    // Traversing the Linked List
    node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " -> ";
        temp = temp->next;
    }
    cout << "NULL" << endl;

    return 0;
}
