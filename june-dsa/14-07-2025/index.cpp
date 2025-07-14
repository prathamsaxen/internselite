#include<iostream>
#define SIZE 100
using namespace std;

class Queue{
    int arr[SIZE];
    int front,rear;

    public:
    Queue(){
        front=-1;
        rear=-1;
    }

    // Push the element to queue
    bool isEmpty(){
         if(front == -1 || front>rear){
            cout<<"Quueu Underflow";
            return true;
        }
        return false;
    }
    bool isFull(){
         if(rear==SIZE-1)
        {
            cout<<"Queue Overflow";
            return true;
        }
        return false;
    }
    void enqueue(int x){
        if(isFull())
        {
           return;
        }
        if(front==-1) front=0;
        arr[++rear]=x;
    }
    
    void dequeue(){
        if(isEmpty()){
            return;
        }
        cout<<"Dequeued"<<arr[front++]<<endl;
    }

    void display(){
        if(isEmpty()){
            return;
        }
        cout<<"Queue Printed -"<<endl;
        for(int index=front;index<=rear;index++)
        {
            cout<<"Queue["<<index<<"] => "<<arr[index]<<endl;
        }
    }

    int frontElement(){
        return arr[front];
    }

    int rearElement(){
        return arr[rear];
        }

};

int main(){
    Queue* Data= new Queue();
    Data->enqueue(5);
    Data->enqueue(6);
    Data->enqueue(10);
    // Data->enqueue(15);
    // Data->enqueue(23);
    // Data->enqueue(27);

    // Data->display();
    // Data->dequeue();
    // Data->display();

    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
    // Data->dequeue();
    // Data->display();
cout<<endl;
    cout<<Data->isEmpty();
    cout<<"Check Queue Filled or not => "<<Data->isFull()<<endl;
    cout<<"Rear Element => "<<Data->rearElement()<<endl;
    cout<<"Front Element => "<<Data->frontElement()<<endl;



    return 0;
}