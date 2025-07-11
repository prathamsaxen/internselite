#include<iostream>
using namespace std;

// Need to define the strcture of node.
struct Node{
    int data;
    Node* next;
};

Node* insertAtBegining(Node* head,int x){
    Node* newNode=new Node{x, head};
    return newNode;
}

Node* insertAtEnd(Node* head, int x){
    Node* newNode=new Node{x,nullptr};
    if(!head) return newNode;
    Node* temp= head;
    while(temp->next) temp = temp->next;
    temp->next=newNode;
    return head;
}

Node* insertAtPosition(Node* head,int  position, int x){
    if(position==0) return insertAtBegining(head,x);
    Node* temp = head;
    for(int i=0;i<position-1&&temp; i++) temp = temp->next;
    if(!temp) return head;
    Node* newHead= new Node{x, temp->next};
    temp->next = newHead;
    return head;
}

Node* deleteBegin(Node* head)
{
    if(!head) return nullptr;
    Node* temp=head;
    head=head->next;
    delete temp;
    return head;
}

Node* deleteEnd(Node* head)
{
    if(!head || !head->next){
        delete head;
        return nullptr;
    }
    Node* temp=head;
    while(temp->next->next) temp = temp->next;
    delete temp->next;
    temp->next=nullptr;
    return head;
}

Node* deleteAtPos(Node* head,int position){
    if(position==0) return deleteBegin(head);
    Node* temp=head;
    for(int i=0;temp && i<position-1;i++) temp= temp-> next;
    if(!temp || !temp->next) return head;
    Node* toDelete=temp->next;
    temp->next=toDelete->next;
    delete toDelete;
    return head;
}

bool search(Node* head,int key)
{
    while(head)
{
    if(head->data==key) return true;
    head=head->next;
}
return false;
}

int countNodes(Node* head)
{
    int count = 0;
    while(head)
    {
        count++;
        head=head->next;
    }
    return count;
}

Node* reverse(Node* head){
    Node* prev=nullptr, *current=head;
    while(current)
    {
        Node*nextNode= current->next;
        current->next=prev;
        prev=current;
        current=nextNode;
    }
    return prev;
}

int main(){
    Node* head=new Node{10, nullptr};
    head->next=new Node{20, nullptr};
    head->next->next=new Node{30, nullptr};

    // Node* temp= head;
    // while(temp!= nullptr)
    // {
    //     cout<<temp->data<<endl;
    //     temp= temp->next;
    // }

    Node* newHead=insertAtBegining(head,-10);
    Node* newHead2=insertAtEnd(newHead,45);
    Node* newHead3= insertAtPosition(newHead2,2,-5);
    Node* newHead4=deleteBegin(newHead3);
    Node* newHead5=deleteEnd(newHead4);
    Node* newHead6=deleteAtPos(newHead5,2);
    Node* newHead7=reverse(newHead6);

    Node* temp2= newHead7;
    while(temp2!= nullptr)
    {
        cout<<temp2->data<<endl;
        temp2= temp2->next;
    }

    cout<<search(newHead6,5)<<endl;
    cout<<countNodes(newHead5)<<endl;

    return 0;
}