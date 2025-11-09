#include<iostream>
#include<string>
using namespace std;

int main(){
    string name = "Pratham";
    // cout<<"Hello World"<<endl;
    // cout<<"My name is "<<name<<endl;

    // string userName;
    // cout<<"Hey Sir, Please enter your name: ";
    // getline(cin,userName);
    // cout<<"Hello, "<<userName<<"!"<<endl;
    // int age;
    // cin>>age;
    // cout<<age;
    // cout<<"Length of String => "<<name.length()<<endl;
    // cout<<"Check String for Empty => "<<name.empty()<<endl;
    // cout<<"Check String for Empty => "<<name.empty()<<endl;
    // name.append(" Saxena");
    // cout<<"We appended a word in String => "<<name<<endl;
    // cout<<"Substring from 0 to 4 => "<<name.substr(0,4)<<endl;

    // string surname = "Saxena";
    // string fullName = name + " " + surname;
    // cout<<fullName<<endl;
    // string myName = "Pratham";

    // // cout<<(name == myName)<<endl;
    // string reversedString = "";

    // for (int index = (name.size()-1); index>=0; index--)
    // {
    //     reversedString += name[index];
    // }
    // cout<<reversedString;
    // for(char element : name)
    // {
    //    reversedString+=name
    // }
    // O(N);

    string testCase = "1211";
    string copyOfTestCase = "1211";

    int start = 0, end=testCase.size()-1;
    while(start<=end)
    {
        char temp=testCase[start];
        testCase[start]=testCase[end];
        testCase[end]=temp;
        start++;
        end--;
    }

    cout<<(testCase==copyOfTestCase)<<endl;
    return 0;
}