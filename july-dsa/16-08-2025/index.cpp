// Bare Minimum code to print "Hello World" in Terminal.
#include<iostream> // Header | Input and Output Operations in your Code.
using namespace std;
int add(int a,int b)
{
    return a*b;
}
int main(){

    // Comments - Particular Code snippet will be present in your code but ignored by Compiler, its just for developers to read and understand.
    // int age=50;
    // float price=99.99;
    // char initials='P';
    // bool isEngineer=true;
    // string name="Pratham Saxena";
    // cout<<age<<endl;
    // cout<<"Hello Pratham"<<endl;
    // cout<<"Initials --- " << initials<<endl;
    // cout<<"Price --- "<< price<<endl;
    // cout<<"Boolean --- "<<isEngineer<<endl;
    // cout<<"Name --- "<<name<<endl;

    // Arithmatic Operators
    // cout<<"Arithmatic Operators -"<<endl;
    // cout<<2+2<<endl;
    // cout<<2*2<<endl;
    // cout<<2-2<<endl;
    // cout<<2/2<<endl;

    // // Comparison Operators
    // cout<<"Comparison Operators -"<<endl;
    // cout<<"Equality Check Operators -"<<endl;
    // cout<<(2==2)<<endl;
    // cout<<(4!=2)<<endl;


    // cout<<"Logical Operators -"<<endl;
    // cout<<(true && true)<<endl;
    // cout<<(true && false)<<endl;
    // cout<<(true || false)<<endl;
    // cout<<(false || false)<<endl;

    // int age=18;
    // if(age>18)
    // {
    //     cout<<"Yes Can Drive"<<endl;
    // }
    // else if(age==18)
    // {
    //     cout<<"Apply for DL"<<endl;
    // }
    // else{
    //     cout<<"Don't touch my car"<<endl;
    // }
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;
    // cout<<"Pratham Saxena"<<endl;

    // for(int index =0;index<10;index++)
    // {
    //     cout<<"Pratham Saxena -- "<<index<<endl;
    // }

    // int index=0;
    // while(index<10)
    // {
    //     cout<<"Pratham Saxena -- "<<index<<endl;
    //     index++;
    // }
    int index=1;
    while(index<101)
    {
        if(index%2==0)
        {
            cout<<index<<endl;
        }
        index++;
    }

    cout<<"Added Function -> "<<add(5,10)<<endl;
    cout<<"Added Function -> "<<add(25,10)<<endl;
    return 0;
}


// Add -> Name of this function
// Return Type of the function
// Input Parameters
// Function Definition