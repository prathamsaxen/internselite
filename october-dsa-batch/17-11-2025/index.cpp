#include<iostream>
using namespace std;

       // Identifier
struct Node{
    int data;
    Node* next;

    Node(int d)
    {
        data = d;
        next = NULL;
    }
};

void insertAtHead(Node* &head,int data){
    Node* newNode=new Node(data);
    newNode->next=head;
    head=newNode;
}

void insertAtEnd(Node* &head,int data)
{
    Node* newNode=new Node(data);
    if(head == NULL)
    {
        head=newNode;
        return;
    }

    Node* temp = head;
    while(temp->next !=NULL)
    {
        temp=temp->next;
    }
    temp->next=newNode;
}

void insertAtPosition(Node* &head,int position, int data)
{
    if(position==1)
    {
        insertAtHead(head,data);
        return;
    }
    Node* newNode=new Node(data);
    Node* temp = head;

    for(int index=1;index<position-1;index++)
    {
        temp = temp->next;
    }
    newNode->next=temp->next;
    temp->next=newNode;
}

// Delete From Begining of the linked list
void deleteHead(Node* &head){
    if(!head) return;
    Node* temp=head;
    head = head->next;
    delete temp;
}

void DeleteTail(Node* &head)
{
    if(!head) return;
    if(head->next == NULL)
    {
        delete head;
        head=NULL;
        return;
    }
    Node* temp = head;
    while(temp->next->next !=NULL)
    {
        temp = temp->next;
    }
    delete temp->next;
    temp->next = NULL;
}

Node* reverse(Node* head)
{
    Node* prev=NULL;
    Node* curr=head;
    Node* next;

    while(curr!= NULL)
    {
        next = curr->next;
        curr->next=prev;

        prev=curr;
        curr=next;
    }
    return prev;
}

Node* findMiddle(Node* head)
{
    Node* slow=head;
    Node* fast=head;

    while(fast && fast -> next)
    {
        slow=slow->next;
        fast=fast->next->next;
    }
    return slow;
}

int main(){
    Node* head=new Node(10);
    Node* second=new Node(20);
    Node* third=new Node(30);
    Node* fourth=new Node(40);
    Node* fifth=new Node(50);
    Node* sixth=new Node(0);

    head->next = second;
    second->next = third;
    third->next = fourth;
    fourth->next = fifth;
    fifth->next = sixth;

    // Node* temp = head;
    // temp = temp->next;
    // temp = temp->next;
    // temp = temp->next;
    // temp = temp->next;
    // temp = temp->next;
    // // temp = temp->next;
    // if(temp!=NULL)
    // {
    //     cout<<"First Element => "<<temp->data<<endl;
    // }
    // else{
    //     cout<<"LL ended"<<endl;
    // }

    // Traverse The Linked List with Loop
    Node* temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;


    insertAtHead(head,-10);

    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    insertAtEnd(head,-50);

    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    insertAtPosition(head,3,0);

    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    deleteHead(head);
    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    DeleteTail(head);
    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    head=reverse(head);
    temp = head;

    while(temp!=NULL)
    {
        cout<<temp->data<<" -> ";
        temp=temp->next;
    }
    cout<<"NULL"<<endl;

    Node* Middle=findMiddle(head);
    cout<<"Middle Node of the LL => "<< Middle->data<<endl;

    return 0;
}

