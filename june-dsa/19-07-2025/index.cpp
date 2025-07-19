#include<iostream>
using namespace std;

#define SIZE 5

class CircularQueue{
    private:
    int arr[SIZE];
    int front, rear;

    public:
    CircularQueue(){
        front=-1;
        rear=-1;
    }

    bool isFull(){
        return (front == (rear+1)%SIZE);
    }

    bool isEmpty(){
        return (front == -1);
    }

    void enqueue(int x){
        if(isFull())
        {
            cout<<"Queue Overflow"<<endl;
            return;
        }
        
        if(isEmpty())
        {
            front=0;
        }

        rear=(rear+1)%SIZE;
        arr[rear]=x;
        cout<<x<<"Enqueued Value in the Queue"<<endl;
    }

    void dequeue()
    {
        if(isEmpty())
        {
            cout<<"Queue Underflow"<<endl;
            return;
        }
        cout<<arr[front]<<" Removed Element from the Queue"<<endl;

        if(front == rear)
        {
            front=rear=-1;
        }
        else{
            front=(front+1)%SIZE;
        }
    }

    int peek(){
        if(isEmpty())
        {
            cout<<"Queue is Empty"<<endl;
            return -1;
        }

        return arr[front];
    }

    
    void display(){
        if(isEmpty())
        {
            cout<<"Queue is Empty!!"<<endl;
            return;
        }

        cout<<"Queue Elements: ";
        int index=front;
        while(true){
            cout<<arr[index]<<" ";
            if (index == rear) break;
            index=(index+1)%SIZE;
        }
        cout<<endl;
    }
};

class Node{
    public:
    int data;
    Node* next;

    Node(int data)
    {
        this->data=data;
        this->next=nullptr;
    }
};

class CircularQueueUsingLinkedList{
    private:
    Node* front;
    Node* rear;

    public:
    CircularQueueUsingLinkedList(){
        front=rear=nullptr;
    }

    bool isEmpty(){
        return front == nullptr;
    }

    void enqueue(int x)
    {
        Node* newNode=new Node(x);
        if(isEmpty())
        {
            front=rear=newNode;
            rear->next=front; // HEre we are making it circular
        }
        else{
            rear->next=newNode;
            rear=newNode;
            rear->next=front;
        }
        cout<< x<<" Element Added"<<endl;
    }

    void dequeue(){
        if(isEmpty())
        {
            cout<<"Queue Underflow"<<endl;
            return;
        }

        int val;
        if (front ==rear)
        {
            val=front->data;
            delete front;
            front=rear=nullptr;
        }
        else{
            Node* temp=front;
            val=temp->data;
            front = front->next;
            rear->next=front;
            delete temp;
        }

        cout<<val<< " Element Removed"<<endl;
    }
    int peek(){

        if(isEmpty())
        {
            cout<<"Queue UnderFlow"<<endl;
            return -1;
        }
        return front->data;
    }

    void display(){
           if(isEmpty())
        {
            cout<<"Queue UnderFlow"<<endl;
            return;
        }
        cout<<"Queue Elements - "<<endl;
        Node* temp = front;
        do{
            cout<<temp->data<< " ";
            temp=temp->next;
        }while(temp!=front);
        cout<<endl;
    }
};

int main(){
    // CircularQueue* Data=new CircularQueue();
    CircularQueueUsingLinkedList* Data = new CircularQueueUsingLinkedList();

    Data->enqueue(10);
    Data->enqueue(20);
    Data->enqueue(30);
    Data->enqueue(40);
    Data->enqueue(50);
    Data->enqueue(60);

    Data->display();
    Data->dequeue();
    Data->display();
    cout<<Data->peek()<<endl;


    return 0;
}