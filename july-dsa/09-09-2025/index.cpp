#include<iostream>
#include<stack>
using namespace std;

bool isBalancedParanthesis(string s){
    stack<char> st;
    for(char c:s){
        if(c=='(' || c=='{' || c=='[') {
            st.push(c);
        }
        else{
            if(st.empty()) return false;
            if((c==')' && st.top() != '(') || (c=='}' && st.top() != '{') || (c==']' && st.top()!='[')) return false;
            st.pop();
        }
    }

    return st.empty();
}


int main(){
    // stack<int> data;

    // data.push(10);
    // data.push(20);
    // data.push(30);
    // data.push(40);

    // cout<<"Top Element => "<<data.top()<<endl;
    // cout<<"Size of Stack => "<<data.size()<<endl;
    // cout<<"Is stack empty? =>" <<data.empty()<<endl;

    // // First Iteration
    // cout<<"Popped Element => "<<data.top()<<endl;
    // data.pop();
    // cout<<"Top Element => "<<data.top()<<endl;
    // cout<<"Size of Stack => "<<data.size()<<endl;
    // cout<<"Is stack empty? =>" <<data.empty()<<endl;

    // // Second Iteration     
    // cout<<"Popped Element => "<<data.top()<<endl;
    // data.pop();
    // cout<<"Top Element => "<<data.top()<<endl;
    // cout<<"Size of Stack => "<<data.size()<<endl;
    // cout<<"Is stack empty? =>" <<data.empty()<<endl;

    // //  Third Iteration
    // cout<<"Popped Element => "<<data.top()<<endl;
    // data.pop();
    // cout<<"Top Element => "<<data.top()<<endl;
    // cout<<"Size of Stack => "<<data.size()<<endl;
    // cout<<"Is stack empty? =>" <<data.empty()<<endl;
     
    // // Fourth Iteration
    // cout<<"Popped Element => "<<data.top()<<endl;
    // data.pop();
    // cout<<"Top Element => "<<data.top()<<endl;
    // cout<<"Size of Stack => "<<data.size()<<endl;
    // cout<<"Is stack empty? =>" <<data.empty()<<endl;
    string input="[]))";
    cout<<isBalancedParanthesis(input)<<endl;
    return 0;
}

// #include <iostream>
// using namespace std;

// #define MAX 5

// class Stack{
//     int arr[MAX];
//     int top;

//     public:
//     Stack(){
//         top=-1;
//     }

//     void push(int x)
//     {
//         if(top==MAX-1){
//             cout<<"Stack Overflow\n";
//             return;
//         }
//         arr[++top]=x;
//     }

//     void pop(){
//         if(top == -1)
//         {
//             cout<<"Stack Underflow"<<endl;
//             return;
//         }
//         top--;
//     }

//     int peek(){
//         if(top==-1){
//             cout<<"Stack Underflow"<<endl;
//         }
//         return arr[top];
//     }

//     bool empty(){
//         return top == -1;
//     }
// };



// int main(){
//     Stack data;
//     data.push(5);
//     data.push(10);
//     data.push(15);

//     cout<<"Top Element"<<data.peek()<<endl;
//     data.pop();
//     cout<<"Top Element"<<data.peek()<<endl;

//     return 0;
// }