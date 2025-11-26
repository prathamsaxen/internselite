#include<iostream>
#include <stack>
using namespace std;

// 1. Array Based Implementation
// 2. LinkedList Based Implementation
// 3. STL Based Implementation

class Stack{
    private:
    int *arr;
    int top;
    int capacity;

    public:
    Stack(int size)
    {
        capacity=size;
        arr=new int(capacity);
        top=-1;
    }

    void push(int x)
    {
        if(top==capacity-1)
        {
            cout<<"Stack Overflow"<<endl;
            return;
        }
        arr[++top]=x;
    }

    void pop(){
        if(top== -1){
            cout<<"Stack Underflow"<<endl;
            return;
        }
        top--;
    }

    int peek()
    {
        if(top== -1){
            cout<<"Stack Underflow"<<endl;
            return -1;
        }
        return arr[top];
    }

    bool isEmpty(){
        return top == -1;
    }

    int size(){
        return top + 1;
    }
};

class Node{
    public:
    int data;
    Node* next;
    
    Node(int val)
    {
        data = val;
        next = NULL;
    }
};

class StackUsingLinkedList{
    Node* top;

    public:
    StackUsingLinkedList(){
       top = NULL;
    }

    void push(int x){
        Node* temp = new Node(x);
        temp->next = top;
        top = temp;
    }

    void pop(){
        if(top == NULL)
        {
            cout<<"Stack Underflow"<<endl;
            return;
        }
        Node* del = top;
        top = top->next;
        delete del;
    }

    int peek(){
        if(top == NULL)
        {   
            cout<<"Stack Underflow"<<endl;
            return -1;
        }
        return top ->data;
    }
    bool isEmpty(){
        return top == NULL;
    }
};

string reverseString(string data)
{
    stack<char> stringStack;

    for(char element:data){
        stringStack.push(element);
    }

    string reversedString = "";
    while(!stringStack.empty())
    {
        reversedString+=stringStack.top();
        stringStack.pop();
    }
    return reversedString;
}

// 3. Stack Using STL

int main(){
    // Stack st(5);

    // st.push(10);
    // st.push(20);
    // st.push(30);

    // cout<<"Top Element => "<<st.peek()<<endl;
    // st.pop();
    // cout<<"Top Element => "<<st.peek()<<endl;

    // StackUsingLinkedList data;

    // data.push(10);
    // data.push(20);
    // data.push(30);

    // cout<<"Top Element => "<<data.peek()<<endl;
    // data.pop();
    // cout<<"Top Element => "<<data.peek()<<endl;
    stack<int> data;

    data.push(10);
    data.push(20);
    data.push(30);

    cout<<"Top Element => "<<data.top()<<endl;
    data.pop();
    data.pop();
    data.pop();
    cout<<"Size of Stack => "<<data.size()<<endl;
    cout<<(data.empty() ? "Empty Stack": "Not Empty Stack")<<endl;

    string name = "Pratham Saxena";
    cout<<reverseString(name)<<endl;

    return 0;
}