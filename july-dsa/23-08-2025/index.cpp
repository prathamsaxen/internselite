// #include<iostream>
// using namespace std;



// struct Node{
//     int data; // Stores Value
//     Node* next; // Stire the Memeory Address to Next Node

//     // Constructor
//     Node(int val)
//     {
//         data = val;
//         next = NULL;
//     }
// };

// void printList(Node* head){
//     Node* temp=head;
//     while(temp!=NULL)
//     {
//         cout<<temp->data<<" -> ";
//         temp=temp->next;
//     }
//     cout<<"NULL"<<endl;
// }

// //call by value and call by reference - try it once you will be having the bandwidth
// void insertAtHead(Node*& head, int val)
// {
//     // cout<<"Original Linked List"<<endl;
//     // printList(head);
//   Node* n = new Node(val);
// //   cout<<"New Node Element"<<endl;
//   n->next=head;
// //   printList(n);
// //   printList(head);
//   head=n;
// }

// void insertAtTail(Node*& head, int val){
//     Node* newNode=new Node(val);
//     if(head==NULL)
//     {
//         head=newNode;
//         return;
//     }
//     Node* temp = head;
//     while(temp->next!=NULL)
//     {
//         temp=temp->next;
//     }
//     temp->next=newNode;
// }

// int main(){
//     Node* head= new Node(10);
//     Node* second= new Node(20);
//     head->next=second;
//     printList(head);
//     insertAtHead(head,0);
//     printList(head);
//     insertAtHead(head,-10);
//     printList(head);
//     insertAtTail(head,50);
//     printList(head);
//     return 0;
// }

// // You need to build a algorithm which will be taking input a 
// // new Element data and position where you wanted to add that 
// // element it will autmatically go to that location and will 
// // add that particular element


// #include<iostream>
// using namespace std;



// struct Node{
//     int data; // Stores Value
//     Node* next; // Store the Memeory Address to Next Node
//     Node* prev; // Store the Memeory Address to Last Node

//     // Constructor
//     Node(int val)
//     {
//         data = val;
//         next = NULL;
//         prev = NULL;
//     }
// };

// void printListForward(Node* head){
//     Node* temp=head;
//     cout<<"Traversing Forward"<<endl;
//     while(temp!=NULL)
//     {
//         cout<<temp->data<<" -> ";
//         temp=temp->next;
//     }
//     cout<<"NULL"<<endl;
// }


// void printListBackward(Node* tail){
//     Node* temp=tail;
//     cout<<"Traversing Backward"<<endl;
//     while(temp!=NULL)
//     {
//         cout<<temp->data<<" -> ";
//         temp=temp->prev;
//     }
//     cout<<"NULL"<<endl;
// }

// //call by value and call by reference - try it once you will be having the bandwidth
// void insertAtHead(Node*& head, Node*& tail, int val)
// {
//     // cout<<"Original Linked List"<<endl;
//     // printList(head);
//   Node* n = new Node(val);
//   if(head==NULL){
//     head=tail=n;
//     return;
//   }
//   n->next=head;
//   head->prev=n;
//   head=n;
// }

// void insertAtTail(Node*& head,Node*& tail, int val){
//     Node* newNode=new Node(val);
//     if(tail==NULL)
//     {
//         head=tail=newNode;
//         return;
//     }
//     // Node* temp = head;
//     // while(temp->next!=NULL)
//     // {
//     //     temp=temp->next;
//     // }
//     // temp->next=newNode;
//     tail->next=newNode;
//     newNode->prev=tail;
//     tail=newNode;
// }

// int main(){
//     Node* head= new Node(10);
//     Node* second= new Node(20);
//     head->next=second;
//     second->prev=head;
//     Node* third= new Node(30);
//     third->prev=second;
//     second->next=third;

//     printListForward(head);
//     printListBackward(third);
//     insertAtHead(head,third,0);
//     printListForward(head);
//     printListBackward(third);
//     insertAtTail(head,third,40);
//     insertAtTail(head,third,50);
//     printListForward(head);
//     printListBackward(third);
//     // printList(head);
//     // insertAtHead(head,-10);
//     // printList(head);
//     // insertAtTail(head,50);
//     // printList(head);
//     return 0;
// }

// // You need to build a algorithm which will be taking input a 
// // new Element data and position where you wanted to add that 
// // element it will autmatically go to that location and will 
// // add that particular element
// // Insert At Head
// // Insert at Tail
// // Insert at Position - You have to build.


// // How to search an element in the linkedlist.
// // 1. Build a function that will take input the LL and the key which we are searching for.
// // 2. Apply a loop to entire Linked LISt
// // 3. In each Iteration match it with the key 
// // 4. In case you find the key which you were looking for simply return the memory address or the position which you can mannually apply.
// // 5. If the entire loop ended and you didn't find your data simply return -1.



#include<iostream>
using namespace std;

int linearSearch(int arr[],int key, int length){
   
    for(int index=0;index<length;index++)
    {
        if(arr[index]==key)
        {
            return index;
        }
    }
    return -1;
}

int main(){
     int age[5]={5,6,7,8,9};
     int length = sizeof(age) / sizeof(age[0]); 
     cout<<"Element Searched for => "<<linearSearch(age,77,length);
    return 0;
}

// Searching a Array
// 1. Linear Search
// 2. Binary Search