#include<iostream>
using namespace std;

struct DNode{
    int data;
    DNode* prev;
    DNode* next;
    DNode(int x): data(x),prev(nullptr),next(nullptr){}
};
void printForward(DNode* head)
{
    for(auto cur=head; cur; cur=cur->next)cout<< cur->data<<" ";
}

void printBackward(DNode* tail)
{
    for(auto cur=tail;cur;cur=cur->prev) cout<<cur->data<<" ";
}

DNode* pushFront(DNode* head,int x){
    auto n = new DNode(x);
    if(!head) return n;
   n->next = head;
   if(head) head->prev=n;
   return n;
}


DNode* pushBack(DNode* head,int x){
  auto n = new DNode(x);
  if(!head) return n;
  auto cur=head;
  while(cur->next) cur = cur->next;
  cur->next=n;
  n->prev=cur;
  return head;
}

DNode* insertAt(DNode* head,int position,int x)
{
    if(position==0) return pushFront(head,x);
    auto cur=head;
    for(int i=0;cur && i<position -1;i++) cur = cur->next;
    if(!cur) return head;
    auto n=new DNode(x);
    n->next=cur->next;
    n->prev=cur;
    if(cur->next) cur->next->prev = n;
    cur->next=n;
    return head;
}

DNode* popFront(DNode* head){
    if(!head) return nullptr;
    auto nxt= head->next;
    delete head;
    if(nxt) nxt->prev=nullptr;
    return nxt;
}

DNode* popBack(DNode* head){
    if(!head || !head->next) {delete head; return nullptr;}
    auto cur = head;
    while(cur->next) cur=cur->next;
    cur->prev->next=nullptr;
    delete cur;
    return head;
}

DNode* eraseAt(DNode* head, int position){
    if(position==0) return popFront(head);
    auto cur=head;
    for(int i=0;cur&& i<position-1;i++) cur = cur->next;
    if(!cur) return head;
    if(cur->prev) cur->prev->next=cur->next;
    if(cur->next) cur->next->prev=cur->prev;
    delete cur;
    return head;
}

struct CNode{
    int data;
    CNode* next;
    CNode(int x): data(x), next(this){}
};

CNode* insertAfter(CNode* pos,int x){
    auto n = new CNode(x);
    n->next=pos->next;
    pos->next = n;
    return pos;
}

void tranversal(CNode* tail)
{
    if(!tail) return;
    CNode* cur=tail->next;
    do{
        cout<<cur->data<< " ";
        cur = cur->next;
    }while(cur!=tail->next);
}
int main(){

    DNode* head=new DNode(5);
    head->prev=nullptr;
    DNode* second=new DNode(10);
    second->prev=head;
    head->next=second;
    DNode* third=new DNode(15);
    second->next=third;
    third->prev=second;
    DNode* fourth=new DNode(20);
    third->next=fourth;
    fourth->prev=third;
    fourth->next=nullptr;
    head= pushFront(head,0);
    head=pushBack(head,25);
    head=insertAt(head,3,12);
    head=popFront(head);
    head=popBack(head);
    head=eraseAt(head,3);
    // printForward(head);
    // printBackward(fourth);'

    CNode* Chead= new CNode(5);
    Chead=insertAfter(Chead,10);
    Chead=insertAfter(Chead,20);

    tranversal(Chead);

    return 0;
}

