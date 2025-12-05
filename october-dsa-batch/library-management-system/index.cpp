#include<iostream>
#include<string>
#include<limits>
using namespace std;

// ===== COLORS =====
#define RESET   "\033[0m"
#define RED     "\033[31m"
#define GREEN   "\033[32m"
#define YELLOW  "\033[33m"
#define BLUE    "\033[34m"
#define CYAN    "\033[36m"
#define MAGENTA "\033[35m"

// ================= BOOK CLASS =================
class Book{
public:
    int id;
    string title;
    string author;
    bool isBorrowed;
    Book* next;

    Book(int id, string title, string author)
    {
        this->id = id;
        this->title = title;
        this->author = author;
        this->isBorrowed = false;
        this->next = nullptr;
    }
};

// ================= LIBRARY CLASS =================
class Library{
private:
    Book* head;

public:
    Library() {
        head = nullptr;
    }

    // ADD BOOK
    void addBook(int id, string title, string author)
    {
        Book* check = head;
        int count = 0;

        while(check && count < 10000){
            if(check->id == id){
                cout << RED << "❌ Book with ID " << id << " already exists!\n" << RESET;
                return;
            }
            check = check->next;
            count++;
        }

        Book* newBook = new Book(id, title, author);

        if(!head){
            head = newBook;
        }
        else{
            Book* temp = head;
            while(temp->next){
                temp = temp->next;
            }
            temp->next = newBook;
        }

        cout << GREEN << "✔ Book added successfully!\n" << RESET;
    }

    // REMOVE BOOK
    void removeBook(int id)
    {
        if(!head){
            cout << RED << "❌ Library is empty!\n" << RESET;
            return;
        }

        Book* temp = head;
        Book* prev = nullptr;

        if(temp->id == id){
            head = temp->next;
            delete temp;
            cout << GREEN << "✔ Book Removed!\n" << RESET;
            return;
        }

        while(temp && temp->id != id){
            prev = temp;
            temp = temp->next;
        }

        if(!temp){
            cout << RED << "❌ Book not found!\n" << RESET;
            return;
        }

        prev->next = temp->next;
        delete temp;
        cout << GREEN << "✔ Book Removed!\n" << RESET;
    }

    // SEARCH BOOK
    void searchBook(int id){
        Book* temp = head;
        while(temp){
            if(temp->id == id){
                cout << CYAN << "\n📘 Book Found!\n" << RESET;
                cout << MAGENTA << "ID: " << temp->id << endl;
                cout << "Title: " << temp->title << endl;
                cout << "Author: " << temp->author << endl;
                cout << "Borrowed: " << (temp->isBorrowed ? "Yes" : "No") << RESET << endl;
                return;
            }
            temp = temp->next;
        }
        cout << RED << "❌ Book not found!\n" << RESET;
    }

    // BORROW BOOK
    void borrowBook(int id){
        Book* temp = head;
        while(temp){
            if(temp->id == id){
                if(temp->isBorrowed){
                    cout << YELLOW << "⚠ Book already borrowed!\n" << RESET;
                } else {
                    temp->isBorrowed = true;
                    cout << GREEN << "✔ Book borrowed successfully!\n" << RESET;
                }
                return;
            }
            temp = temp->next;
        }
        cout << RED << "❌ Book not found!\n" << RESET;
    }

    // RETURN BOOK
    void returnBook(int id){
        Book* temp = head;
        while(temp){
            if(temp->id == id){
                if(!temp->isBorrowed){
                    cout << YELLOW << "⚠ Book already returned!\n" << RESET;
                } else {
                    temp->isBorrowed = false;
                    cout << GREEN << "✔ Book returned successfully!\n" << RESET;
                }
                return;
            }
            temp = temp->next;
        }
        cout << RED << "❌ Book not found!\n" << RESET;
    }

    // DISPLAY BOOKS
    void displayBooks(){
        if(!head){
            cout << YELLOW << "📂 Library is empty!\n" << RESET;
            return;
        }

        cout << BLUE << "\n========= 📚 Library Books 📚 =========\n" << RESET;

        Book* temp = head;
        while(temp){
            cout << CYAN << "ID: " << temp->id << RESET << endl;
            cout << "Title: " << GREEN << temp->title << RESET << endl;
            cout << "Author: " << MAGENTA << temp->author << RESET << endl;
            cout << "Borrowed: " << (temp->isBorrowed ? RED "Yes" : GREEN "No") << RESET << endl;
            cout << YELLOW << "---------------------------------------\n" << RESET;
            temp = temp->next;
        }
    }
};

// ================= MAIN PROGRAM =================
int main(){
    Library lib;
    int choice, id;
    string title, author;

    cout << GREEN << "\n==============================\n";
    cout << "Welcome to Library System\n";
    cout << "Developed by: " << CYAN << "Pratham Saxena\n";
    cout << GREEN << "==============================\n\n" << RESET;

    while(true){
        cout << BLUE << "\n========= Library Menu =========\n" << RESET;
        cout << CYAN << "1. Add Book\n2. Remove Book\n3. Search Book\n4. Borrow Book\n5. Return Book\n6. Display All Books\n7. Exit\n" << RESET;
        cout << YELLOW << "Enter your choice: " << RESET;

        cin >> choice;

        switch(choice){
            case 1:
                cout << "Enter Book ID: ";
                cin >> id;
                cin.ignore(numeric_limits<streamsize>::max(), '\n');

                cout << "Enter Title: ";
                getline(cin, title);

                cout << "Enter Author: ";
                getline(cin, author);

                lib.addBook(id, title, author);
                break;

            case 2:
                cout << "Enter Book ID to remove: ";
                cin >> id;
                lib.removeBook(id);
                break;

            case 3:
                cout << "Enter Book ID to search: ";
                cin >> id;
                lib.searchBook(id);
                break;

            case 4:
                cout << "Enter Book ID to borrow: ";
                cin >> id;
                lib.borrowBook(id);
                break;

            case 5:
                cout << "Enter Book ID to return: ";
                cin >> id;
                lib.returnBook(id);
                break;

            case 6:
                lib.displayBooks();
                break;

            case 7:
                cout << GREEN << "👋 Exiting... Thank you!\n" << RESET;
                return 0;

            default:
                cout << RED << "❌ Invalid choice! Try again.\n" << RESET;
        }
    }
}
