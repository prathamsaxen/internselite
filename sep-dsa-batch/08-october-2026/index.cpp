#include <iostream>
// I want to to try yourself.
// #include <stack>
using namespace std;


class Stack{
    private:
    static const int capacity = 100;
    int data[capacity];
    int top;

    public:
    Stack(){
        top = -1;
    }

    bool isEmpty(){
        return top == -1;
    }

    bool isFull(){
        return top == capacity - 1;
    }

    void push(int value){
        if(isFull()){
            cout << "Stack overflow!" << endl;
            return;
        }
        top++;
        data[top] = value;
    }

    int pop(){
        if(isEmpty()){
            cout << "Stack underflow!" << endl;
            return -1;
        }
        int value = data[top];
        top--;
        return value;
    }

    int peek(){
        if(isEmpty()){
            cout << "Stack is empty!" << endl;
            return -1;
        }
        return data[top];
    }

    int size(){
        return top + 1;
    }

    void display(){
        if(isEmpty()){
            cout << "Stack is empty!" << endl;
            return;
        }
        for(int i = top; i >= 0; i--){
            cout << data[i] << " ";
        }
        cout << endl;
    }

  
};

class Queue{
    private:
    static const int capacity = 100;
    int data[capacity];
    int front;
    int rear;

    public:
    Queue(){
        front = 0;
        rear = -1;
    }

    bool isEmpty(){
        return front > rear;
    }

    bool isFull(){
        return rear == capacity - 1;
    }

    void enqueue(int value){
        if(isFull()){
            cout << "Queue overflow!" << endl;
            return;
        }
        rear++;
        data[rear] = value;
    }

    void dequeue(){
        if(isEmpty()){
            cout << "Queue underflow!" << endl;
            return;
        }
        front++;
    }
    int getFront(){
        if(isEmpty()){
            cout << "Queue is empty!" << endl;
            return -1;
        }
        return data[front];
    }

    void display(){
        if(isEmpty()){
            cout << "Queue is empty!" << endl;
            return;
        }
        for(int i = front; i <= rear; i++){
            cout << data[i] << " ";
        }
    }

    int size(){
        return rear - front + 1;
    }

};

int main(){
    Stack stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.display();
    cout << "Peek: " << stack.peek() << endl;
    cout << "Pop: " << stack.pop() << endl;
    stack.display();
    cout << "Size: " << stack.size() << endl;




    cout<<"-----------------------------Queue-----------------------------"<<endl;
    Queue queue;
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.display();
    cout << "Front: " << queue.getFront() << endl;
    cout << "Dequeue: " << endl;
    queue.dequeue();
    queue.display();
    cout << "Size: " << queue.size() << endl;

    return 0;
}