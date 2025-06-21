// // String 
// //  It is a sequence of characters.
// //  Two types of strings
// // 1. C Style strings (Character Array)
// //  2. C++ String class (#include<string>)

// #include<iostream>
// #include<cstring>
// using namespace std;

// int main(){
//     char str1[20] = "Hello Pratham";
//     char str2[20];

//     cout<<"Enter a string: ";
//     // cin>>str2;
//     strcpy(str2,str1);
//     cout<<"Strign Comparison => "<<strcmp(str1,str2)<<endl;

//     cout<<"First String => "<<str1<<endl;
//     cout<<"Input String => "<< str2<<endl;
//     cout<<"Length of the String => "<< strlen(str1)<<endl;
//     // StrCat -> Generally used to concatinate the strings.
//     strcat(str2,str1);
//     cout<<"Input String => "<< str2<<endl;
//     // StrCmp -> This will compare two different strings;
//     cout<<strcmp(str1,str2);
    
//     return 0;
// }

#include<iostream>
#include<string>

using namespace std;

int reverseNumber(int number)
{
    int reversedNumber=0;
    while(number>0)
    {
        int digit=number%10;
        number = number/10;
        reversedNumber=(reversedNumber*10)+digit;
    }
    return reversedNumber;
}

int palindromNumber(int num, int num2)
{
    return num == num2;
}
int main(){
    string name = "Pratham";
    cout<<"Name[0] => "<<name[0]<<endl;
    name+=" Saxena";
    cout<<"Name => "<<name<<endl;
    cout<<"Length => "<<name.length()<<endl;
    cout<<name.substr(0,7)<<endl;
    cout<<name.find("Saxena")<<endl;
    // name.erase(8,14);
     cout<<"Name => "<<name<<endl;
     name.replace(8,6,"- Software Engineer");
     cout<<"Name => "<<name<<endl;
    cout<<reverseNumber(534)<<endl;
    cout<<palindromNumber(1211,reverseNumber(1211))<<endl;
    return 0;
}

//  Apply Two Pointer Algorithm
// while(start<=end)
// ABBA
// S  E
// S==E 
// Start++
// END --
// ABBA 
//  SE
// S==E
// Return True
// S!=E
// Return False

//  Reverse Via Two pointer
// while(start<=end)
// ABBA
// S  E
// S==E  Swap(S with E)
// Start++
// END --
// ABBA 
//  SE
// S==E
// Return True
// S!=E
// Return False

