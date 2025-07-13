#include<iostream>
#include <stack>
#define SIZE 100
using namespace std;

// Static Memory Allocations
class Stack{
    int top;
    int arr[SIZE];

    public:
    Stack(){top=-1;}

    void push(int x){
        if(top>=SIZE -1)
        {
            cout<<"Stack Overflow\n";
            return;
        }
        arr[++top]=x;
    }

    void pop(){
        if(top<0){
            cout<<"Stack Underflow\n";
            return;
        }
        top--;
    }
    int peek(){
        if(top<0) return -1;
        return arr[top];
    }

    bool isEmpty(){
        return top == -1;
    }

    bool isFull(){
        return top == SIZE -1;
    }
};


// Dynamic Memory Allocations
struct Node{
    int data;
    Node* next;
};

class StackUsingLinkedList{
    Node* top;

    public:
        StackUsingLinkedList() {top=nullptr;}

        void push(int data){
            Node* temp=new Node();
            temp->data=data;
            temp->next=top;
            top=temp;
        }

        void pop(){
            if(top==nullptr){
                cout<<"Stack Underflow\n";
                return;
            }
            Node* temp=top;
            top=top->next;
            delete temp;
        }

        int peek(){
            if(top==nullptr) return -1;
            return top->data;
        }

        bool isEmpty(){
            return top == nullptr;
        }
};

int main(){
    Stack* data=new Stack();
    data->push(5);
    cout<< data->peek()<<endl;
    data->push(6);
    cout<< data->peek()<<endl;
    data->push(7);
    cout<< data->peek()<<endl;
    data->push(8);
    cout<< data->peek()<<endl;

    // STL library Stack
    stack<int>  dataStack;
    dataStack.push(10);
    cout<< dataStack.top()<<endl;
    dataStack.push(20);
    cout<< dataStack.top()<<endl;
    dataStack.push(30);
    cout<< dataStack.top()<<endl;
    dataStack.push(40);
    cout<< dataStack.top()<<endl;
    dataStack.pop();
    cout<< dataStack.top()<<endl;
   dataStack.pop();
    cout<< dataStack.top()<<endl;
   dataStack.pop();
    cout<< dataStack.top()<<endl;


    cout<<"IS Empty:" <<dataStack.empty()<<endl;



// Reversed String via Stack
    stack<char> reverseString;
    string name="Pratham Saxena";
    for(char c:name) reverseString.push(c);

    string reverse="";

    while(!reverseString.empty()){
        reverse+=reverseString.top();
        reverseString.pop();
    }
    cout<<"Reversed String => "<<reverse<<endl;



    // Balance Check via Stack
    string check="[{(}]";
    stack<char> balanceCheck;
    for(char c:check){
        if(c=='(' || c=='[' || c=='{')
        {
            balanceCheck.push(c);
        }
        else{
            if(balanceCheck.empty()) cout<<"Invalid Paranthesis";
            char toppestElement=balanceCheck.top();
            if((c==')' && toppestElement != '(' )||(c=='}' && toppestElement != '{' ) || (c==']' && toppestElement != '[' )){
                cout<<"Invalid Paranthesis"<<endl;
            }
            balanceCheck.pop();
        }

    }
    cout<<"Paranthesis => "<<balanceCheck.empty()<<endl;
    return 0;
}