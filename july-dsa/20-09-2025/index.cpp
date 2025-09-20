#include<iostream>
using namespace std;

#define SIZE 5

class circularQueue{
    int arr[SIZE];
    int front,rear,count;

    public:
    circularQueue(){
        front=0;
        rear=-1;
        count=0;
    }

    bool isFull(){
        return count==SIZE;
    }

    bool isEmpty(){
        return count == 0;
    }

    void enqueue(int data){
        if(isFull()){
            cout<<"Queue overflow!"<<endl;
            return;
        }
        rear = (rear+1)%SIZE;
        arr[rear]=data;
        count++;
        cout<<"Queue Enqueued"<<endl;
    }

     void dequeue(){
        if(isEmpty()){
            cout<<"Queue Underflow!"<<endl;
            return;
        }
        cout<<"Queue Dequeued -> "<<arr[front]<<endl;
        front = (front+1)%SIZE;
        count--;
    }

    void peek(){
          if(isEmpty()){
            cout<<"Queue Underflow!"<<endl;
            return;
        }
        cout<<"Front Element => "<<arr[front]<<endl;
    }

    void display(){
          if(isEmpty()){
            cout<<"Queue Underflow!"<<endl;
            return;
        }
        cout<<"Queur Elements are listed below -"<<endl;
        for(int index=0;index<count;index++){
            cout<<arr[(front+index)%SIZE]<<" ";
        }
        cout<<endl;
    }
};

int main(){

    circularQueue dataQueue;

    dataQueue.enqueue(10);
    dataQueue.enqueue(20);
    dataQueue.enqueue(30);
    dataQueue.enqueue(40);
    dataQueue.enqueue(50);
    dataQueue.dequeue();
    dataQueue.enqueue(60);
    dataQueue.display();
    dataQueue.peek();
    dataQueue.isEmpty();
    dataQueue.isFull();

    cout<<"Element Removed"<<endl;
    dataQueue.dequeue();
    dataQueue.display();
    dataQueue.peek();
    dataQueue.isEmpty();
    dataQueue.isFull();
   
    cout<<"Element Removed"<<endl;
    dataQueue.dequeue();
    dataQueue.display();
    dataQueue.peek();
    dataQueue.isEmpty();
    dataQueue.isFull();

    cout<<"Element Removed"<<endl;
    dataQueue.dequeue();
    dataQueue.display();
    dataQueue.peek();
    dataQueue.isEmpty();
    dataQueue.isFull();

    cout<<"Element Removed"<<endl;
    dataQueue.dequeue();
    dataQueue.display();
    dataQueue.peek();
    dataQueue.isEmpty();
    dataQueue.isFull();

    
    return 0;
}