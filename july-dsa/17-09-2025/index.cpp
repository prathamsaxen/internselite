#include<iostream>
#include<queue>
#define MAX 100
using namespace std;

// Queue
// Linear Data Structure
// Ticket Counter 

// Operations
// Enqueue
// DeQueue
// Front Element
// Rear Element
// Empty()
// Size of Queue

class Queue{
    public:
    int arr[MAX];
    int front;
    int rear;
    int size;
};

void initQueue(Queue &q){
    q.front=0;
    q.rear=-1;
    q.size=0;
}

bool isEmpty(Queue &q){
    return q.size == 0;
}

bool isFull(Queue &q){
    return q.size == MAX;
}

void enqueue(Queue &q, int val)
{
    if(isFull(q)){
        cout << "Queue OverFlow" << endl;
        return;
    }
    q.rear = (q.rear + 1) % MAX; // Use modulo operator for circular queue
    q.arr[q.rear] = val;
    q.size++;
    cout << val << " Enqueued" << endl;
}

int dequeue(Queue &q)
{
    if(isEmpty(q)){
        cout << "Queue Underflow" << endl;
        return -1;
    }
    int value = q.arr[q.front];
    q.front = (q.front + 1) % MAX; // Use modulo operator for circular queue
    q.size--;
    return value;
}

int getFront(Queue &q)
{
     if(isEmpty(q)){
        cout<<"Queue Underflow"<<endl;
        return -1;
    }
    return q.arr[q.front];
}

int getBack(Queue &q)
{
     if(isEmpty(q)){
        cout<<"Queue Underflow"<<endl;
        return -1;
    }
    return q.arr[q.rear];
}

int getSize(Queue &q)
{
    return q.size;
}



// int main(){
//     // queue<int> data;
//     Queue data;
//     initQueue(data);
//     // Data Push Queue
//     enqueue(data,10);
//     enqueue(data,20);
//     enqueue(data,30);

//     // cout<<"Front Element => "<<data.front()<<endl;
//     // cout<<"Back Element => "<₹₹₹<data.back()<<endl;
//     // cout<<"Size of Queue=> "<<data.size()<<endl;
//     // cout<<"Is Empty? => "<<data.empty()<<endl;

//     // data.pop();

//     // cout<<"======================= First Element Removed ======================="<<endl;

//     // cout<<"Front Element => "<<data.front()<<endl;
//     // cout<<"Back Element => "<<data.back()<<endl;
//     // cout<<"Size of Queue=> "<<data.size()<<endl;
//     // cout<<"Is Empty? => "<<data.empty()<<endl;

//     // data.pop();

//     // cout<<"======================= Second Element Removed ======================="<<endl;

    
//     // cout<<"Front Element => "<<data.front()<<endl;
//     // cout<<"Back Element => "<<data.back()<<endl;
//     // cout<<"Size of Queue=> "<<data.size()<<endl;
//     // cout<<"Is Empty? => "<<data.empty()<<endl;
    
//     // data.pop();

//     // cout<<"======================= Third Element Removed ======================="<<endl;


//     cout<<"Front Element => "<<getFront(data)<<endl;
//     cout<<"Back Element => "<<getBack(data)<<endl;
//     // cout<<"Size of Queue=> "<<size(data)<<endl;
//     cout<<"Is Empty? => "<<isEmpty(data)<<endl;

//     while(!isEmpty(data))
//     {
//         cout<<"======================= Element Removed ======================="<<endl;
//         dequeue(data);
//         cout<<"Front Element => "<<getFront(data)<<endl;
//         cout<<"Back Element => "<<getBack(data)<<endl;
//         // cout<<"Size of Queue=> "<<size(data)<<endl;
//         cout<<"Is Empty? => "<<isEmpty(data)<<endl;
//     }

//     return 0;
// }
int main(){
    Queue data;
    initQueue(data);
    
    // Data Push Queue
    enqueue(data, 10);
    enqueue(data, 20);
    enqueue(data, 30);
    
    cout << "Front Element => " << getFront(data) << endl;
    cout << "Back Element => " << getBack(data) << endl;
    cout << "Size of Queue => " << getSize(data) << endl;
    cout << "Is Empty? => " << isEmpty(data) << endl;

    cout << "======================= Element Removed =======================" << endl;
    cout << dequeue(data) << " dequeued" << endl;

    cout << "Front Element => " << getFront(data) << endl;
    cout << "Back Element => " << getBack(data) << endl;
    cout << "Size of Queue => " << getSize(data) << endl;
    cout << "Is Empty? => " << isEmpty(data) << endl;

    cout << "======================= Element Removed =======================" << endl;
    cout << dequeue(data) << " dequeued" << endl;

    cout << "Front Element => " << getFront(data) << endl;
    cout << "Back Element => " << getBack(data) << endl;
    cout << "Size of Queue => " << getSize(data) << endl;
    cout << "Is Empty? => " << isEmpty(data) << endl;

    cout << "======================= Element Removed =======================" << endl;
    cout << dequeue(data) << " dequeued" << endl;

    cout << "Front Element => " << getFront(data) << endl;
    cout << "Back Element => " << getBack(data) << endl;
    cout << "Size of Queue => " << getSize(data) << endl;
    cout << "Is Empty? => " << isEmpty(data) << endl;

    return 0;
}