// #include<iostream>
// using namespace std;

// class Queue{
//     private:
//     int front, rear,size;
//     int* arr;

//     public:
//     Queue(int n)
//     {
//         size = n;
//         arr = new int[size];
//         front = rear = -1;
//     }

//     bool isEmpty(){
//         return front == -1;
//     }

//     bool isFull(){
//         return rear == size - 1;
//     }

//     void enqueue(int data){
//         if(isFull())
//         {
//             cout<<"Queue is Full"<<endl;
//             return;
//         }
//         if(front == -1)
//         {
//             front = 0;
//         }
//         rear++;
//         arr[rear] = data;
//     }

//     void dequeue(){
//         if(isEmpty())
//         {
//             cout<<"Queue is Empty"<<endl;
//             return;
//         }
//         int data = arr[front];
        
//        if( front == rear)
//        {
//         front = rear = -1;
//        }
//        else{
//         front++;
//        }
// }

// int getFront(){
//     if(isEmpty()) return -1;
//     return arr[front];
// }

// int getRear(){
//     if(isEmpty()) return -1;
//     return arr[rear];
// }

// void printQueue(){

//     if(isEmpty()){
//         cout<<"Queue is Empty"<<endl;
//         return;
//     }
//     for(int i=front;i<=rear;i++){
//         cout<<arr[i]<<" ";
//     }
//     cout<<endl;
// }};

// int main()
// {
  
//     Queue q(5);
//     q.enqueue(10);
//     q.enqueue(20);
//     q.enqueue(30);
//     q.enqueue(40);
//     q.enqueue(50);
//     q.printQueue();
//     q.dequeue();
//     q.printQueue();
//     cout<<"Front Element => "<<q.getFront()<<endl;
//     cout<<"Rear Element => "<<q.getRear()<<endl;
//     return 0;
// }


// LinkedList Based Implementation
// #include<iostream>
// using namespace std;

// class Node{
//     public:
//     int data;
//     Node* next;
//     Node(int data)
//     {
//         this->data=data;
//     }
// };

// class Queue{
//     private:
//     Node* front, * rear;

//     public:
//     Queue(){
//         front = rear = NULL;
//     }

//     bool isEmpty(){
//         return front == NULL;
//     }

//     void enqueue(int data){
//         Node* newNode = new Node(data);
//         if ( rear == NULL)
//         {
//             front = rear = newNode;
//             return;
//         }
//         rear-> next = newNode;
//         rear = newNode;
//     }

//     void dequeue(){
//         if(isEmpty())
//         {
//             cout<<"Queue is Empty"<<endl;
//             return;
//         }
//         Node* temp = front;
//         front = front->next;
//         if(front == NULL)
//         {
//             rear = NULL;
            
//     }
  

//     delete temp;}

//     int getFront(){
//         if(isEmpty()) return -1;    
//         return front->data;
//     }
    
//     int getRear(){  
//         if(isEmpty()) return -1;
//         return rear->data;
//     }

//     void printQueue(){
//         if(isEmpty())
//         {
//             cout<<"Queue is Empty"<<endl;
//             return;
//         }
//         Node* temp = front;
//         while(temp != NULL)
//         {
//             cout<<temp->data<<" ";
//             temp = temp->next;
//         }
//         cout<<endl;
// }};

// int main(){
//     Queue q;
//     q.enqueue(10);
//     q.enqueue(20);
//     q.enqueue(30);
//     q.enqueue(40);
//     q.enqueue(50);
//     q.printQueue();
//     q.dequeue();
//     q.printQueue();
//     cout<<"Front Element => "<<q.getFront()<<endl;
//     cout<<"Rear Element => "<<q.getRear()<<endl;
//     return 0;
// }


#include<iostream>
#include<queue>

using namespace std;

int main(){
    queue<int> q;
    q.push(10);
    q.push(20);
    q.push(30);
    q.push(40);
    q.push(50);
    cout<<"Front Element => "<<q.front()<<endl;
    cout<<"Rear Element => "<<q.back()<<endl;
    q.pop();
    q.pop();
    cout<<"Size of Queue => "<<q.size()<<endl;
    cout<<"Empty Queue => "<<q.empty()<<endl;
    cout<<"Front Element => "<<q.front()<<endl;
    cout<<"Rear Element => "<<q.back()<<endl;
    q.pop();
    cout<<"Front Element => "<<q.front()<<endl;
    cout<<"Rear Element => "<<q.back()<<endl;
    q.pop();
    cout<<"Front Element => "<<q.front()<<endl;
    cout<<"Rear Element => "<<q.back()<<endl;
    q.pop();
    cout<<"Front Element => "<<q.front()<<endl;
    cout<<"Rear Element => "<<q.back()<<endl;
    return 0;
}