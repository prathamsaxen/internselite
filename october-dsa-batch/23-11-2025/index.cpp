#include<iostream>
using namespace std;

// Node Structure
struct Node {
    int data;
    Node* next;
    Node* prev;

    Node(int d) {
        data = d;
        next = NULL;
        prev = NULL;
    }
};

// Forward Print
void printForward(Node* head) {
    cout << "NULL <-> ";
    Node* temp = head;
    while (temp != NULL) {
        cout << temp->data << " <-> ";
        temp = temp->next;
    }
    cout << "NULL\n";
}

// Backward Print
void printBackward(Node* tail) {
    cout << "NULL <-> ";
    Node* temp = tail;
    while (temp != NULL) {
        cout << temp->data << " <-> ";
        temp = temp->prev;
    }
    cout << "NULL\n";
}

/*********************
  INSERT FUNCTIONS
*********************/

// Insert at Head
void insertAtHead(Node* &head, Node* &tail, int data) {
    Node* newNode = new Node(data);

    if (head == NULL) {
        head = tail = newNode;
        return;
    }

    newNode->next = head;
    head->prev = newNode;
    head = newNode;
}

// Insert at End
void insertAtEnd(Node* &head, Node* &tail, int data) {
    Node* newNode = new Node(data);

    if (head == NULL) {
        head = tail = newNode;
        return;
    }

    tail->next = newNode;
    newNode->prev = tail;
    tail = newNode;
}

// Insert at Position
void insertAtPosition(Node* &head, Node* &tail, int pos, int data) {
    if (pos == 1) {
        insertAtHead(head, tail, data);
        return;
    }

    Node* temp = head;
    for (int i = 1; i < pos - 1; i++) {
        temp = temp->next;
        if (temp == NULL) return;
    }

    if (temp->next == NULL) {
        insertAtEnd(head, tail, data);
        return;
    }

    Node* newNode = new Node(data);
    newNode->next = temp->next;
    newNode->prev = temp;

    temp->next->prev = newNode;
    temp->next = newNode;
}

/*********************
  DELETE FUNCTIONS
*********************/

// Delete Head
void deleteHead(Node* &head, Node* &tail) {
    if (head == NULL) return;

    Node* temp = head;

    if (head->next == NULL) { // Only 1 element
        head = tail = NULL;
    } else {
        head = head->next;
        head->prev = NULL;
    }

    delete temp;
}

// Delete Tail
void deleteTail(Node* &head, Node* &tail) {
    if (tail == NULL) return;

    Node* temp = tail;

    if (tail->prev == NULL) { // Only 1 element
        head = tail = NULL;
    } else {
        tail = tail->prev;
        tail->next = NULL;
    }

    delete temp;
}

// Delete at Position
void deleteAtPosition(Node* &head, Node* &tail, int pos) {
    if (pos == 1) {
        deleteHead(head, tail);
        return;
    }

    Node* temp = head;
    for (int i = 1; i < pos; i++) {
        temp = temp->next;
        if (temp == NULL) return;
    }

    if (temp->next == NULL) {
        deleteTail(head, tail);
        return;
    }

    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;

    delete temp;
}

/*********************
  REVERSE DLL
*********************/
Node* reverseDLL(Node* &head, Node* &tail) {
    Node* curr = head;
    Node* prevNode = NULL;

    while (curr != NULL) {
        prevNode = curr->prev;
        curr->prev = curr->next;
        curr->next = prevNode;
        curr = curr->prev; // Move to next original
    }

    if (prevNode != NULL)
        head = prevNode->prev;

    // Swap head & tail
    Node* temp = head;
    head = tail;
    tail = temp;

    return head;
}

/*********************
  FIND MIDDLE
*********************/
Node* findMiddle(Node* head) {
    Node* slow = head;
    Node* fast = head;

    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    return slow;
}

/*********************
          MAIN
*********************/
int main() {

    Node* head = NULL;
    Node* tail = NULL;

    cout << "=== INSERT AT HEAD ===\n";
    insertAtHead(head, tail, 30);
    insertAtHead(head, tail, 20);
    insertAtHead(head, tail, 10);
    printForward(head);
    printBackward(tail);

    cout << "\n=== INSERT AT END ===\n";
    insertAtEnd(head, tail, 40);
    insertAtEnd(head, tail, 50);
    printForward(head);
    printBackward(tail);

    cout << "\n=== INSERT AT POSITION ===\n";
    insertAtPosition(head, tail, 3, 99);
    printForward(head);
    printBackward(tail);

    cout << "\n=== DELETE HEAD ===\n";
    deleteHead(head, tail);
    printForward(head);

    cout << "\n=== DELETE TAIL ===\n";
    deleteTail(head, tail);
    printForward(head);

    cout << "\n=== DELETE AT POSITION ===\n";
    deleteAtPosition(head, tail, 3);
    printForward(head);

    cout << "\n=== REVERSE DLL ===\n";
    reverseDLL(head, tail);
    printForward(head);

    cout << "\n=== MIDDLE NODE ===\n";
    Node* mid = findMiddle(head);
    cout << "Middle Node: " << mid->data << endl;

    return 0;
}
