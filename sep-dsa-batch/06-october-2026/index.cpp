#include <iostream>
using namespace std;

struct Node{
    int data;
    Node* next;

    Node(int data){
        this->data = data;
        this->next = nullptr;
    }
   
};

void traverseLinkedList(Node* head){
    Node* temp = head;
    while(temp != nullptr){
        cout << temp->data << " ";
        temp = temp->next;
    }
    cout << endl;
}

void insertAtBeginning(Node* &head, int data){
    Node* newNode = new Node(data);
    newNode->next = head;
    head = newNode;
}

void deleteFromBegining(Node* &head){
    if(head == nullptr){
        return;
    }
    Node* temp = head;
    head = head->next;
    delete temp;
}


void insertAtEnd(Node* &head, int data){
    Node* newNode = new Node(data);

    if(head == nullptr){
        head = newNode;
        return;
    }

    Node* temp = head;
    while(temp->next != nullptr){
        temp = temp->next;
    }

    temp->next = newNode;
}



// Insert at a given position

// O(n) time complexity
// O(1) space complexity

void reverseLinkedList(Node* &head){
    Node* prev = nullptr;
    Node* current = head;

    while(current != nullptr){
        Node* next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }

    head = prev;
}



int main() {

    Node* head = new Node(10);
    Node* second = new Node(20);
    Node* third = new Node(30);

    // 10 -> 20 -> 30 -> nullptr

    head->next = second;
    second->next = third;

   traverseLinkedList(head);

   insertAtBeginning(head, 5);
   traverseLinkedList(head);

   insertAtEnd(head, 40);
   traverseLinkedList(head);

   deleteFromBegining(head);
   traverseLinkedList(head);

   reverseLinkedList(head);
   traverseLinkedList(head);

    cout << endl;

    return 0;
}