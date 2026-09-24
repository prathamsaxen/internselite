// Online C++ compiler (editor)
// Write and run C++ online using this editor.

#include <iostream>
#include <string>
using namespace std;

int main() {

    // int marks = 85;
    // int marks2 = 90;
    // int marks3 = 78;
    // int marks4 = 92;
    // int marks5 = 88;

    // int marks[5] = {85, 90, 78, 92, 88};
    // dataType arrayName[size];
    int marks[]={85, 90, 78, 92, 88};

    cout<<"First Element which is at Index 0 is: "<<marks[0]<<endl;
    cout<<"Second Element which is at Index 1 is: "<<marks[1]<<endl;
    cout<<"Third Element which is at Index 2 is: "<<marks[2]<<endl;
    cout<<"Fourth Element which is at Index 3 is: "<<marks[3]<<endl;
    cout<<"Fifth Element which is at Index 4 is: "<<marks[4]<<endl;

    cout<<"Updating the array elements"<<endl;
    marks[0] = 95;
    marks[1] = 98;
    marks[2] = 100;
    marks[3] = 97;
    marks[4] = 99;

    // cout<<"First Element which is at Index 0 is: "<<marks[0]<<endl;
    // cout<<"Second Element which is at Index 1 is: "<<marks[1]<<endl;
    // cout<<"Third Element which is at Index 2 is: "<<marks[2]<<endl;
    // cout<<"Fourth Element which is at Index 3 is: "<<marks[3]<<endl;
    // cout<<"Fifth Element which is at Index 4 is: "<<marks[4]<<endl;

    cout<<"Array Traversal Logic"<<endl;

    for(int index=0;index<5;index++)
    {
        cout<<"Element Present at Index ["<<index<<"] is: "<<marks[index]<<endl;
    }

    // cout<<"Array Values Input by user!!"<<endl;
    // for(int index=0;index<5;index++)
    // {
    //     cout<<"Enter the value for Index ["<<index<<"] : ";
    //     cin>>marks[index];
    // }

    cout<<"Array Traversal Logic"<<endl;
    for(int index=0;index<5;index++)
    {
        cout<<"Element Present at Index ["<<index<<"] is: "<<marks[index]<<endl;
    }

    int sum = 0;

    for(int index=0;index<5;index++)
    {
        sum = sum + marks[index];
    }
    cout<<"Sum of all the elements in the array is: "<<sum<<endl;
    cout<<"Average of all the elements in the array is: "<<sum/5<<endl;

    int min = marks[0];
    int max = marks[0];
    for(int index=0;index<5;index++)
    {
        if(marks[index] < min)
        {
            min = marks[index];
        }
        if(marks[index] > max)
        {
            max = marks[index];
        }
    }

    cout<<"Minimum value in the array is: "<<min<<endl;
    cout<<"Maximum value in the array is: "<<max<<endl;

    int target = 97;
    for(int index=0;index<5;index++)
    {
        if(marks[index] == target)
        {
            cout<<"Target found at Index ["<<index<<"]"<<endl;
        }
    }

    int marksAB[3][3] = {{90, 85, 88},
                         {80, 92, 85}, 
                         {95, 89, 91}};

    cout<<endl;

    cout<<"2D Array Traversal Logic"<<endl;
    for(int row=0;row<3;row++)
    {
        for(int col=0;col<3;col++)
        {
            cout<<marksAB[row][col]<<" ";
        }
    }

    // Write a program to add two matrices and store the result in a third matrix.
    cout<<endl;
    cout<<"--------------------------------"<<endl;
    cout<<"--------------------------------"<<endl;
    cout<<endl;
    cout<<endl;
    cout<<endl;
    cout<<endl;
    cout<<endl;

    string studentName = "Pratham Saxena";

    cout<< studentName << endl;

    // cin and getline

    // string newNameInput;

    // cout<<"Enter the new name: ";
    // getline(cin, newNameInput);

    // cout<<"The new name is: "<<newNameInput<<endl;
 

    // int age;
    // string data;
    // cin>>age;
    // cin.ignore();
    // getline(cin, data);

    // cout<<"the age is: "<<age<<endl;
    // cout<<"the data is: "<<data<<endl;

    cout<<"Length of the string is: "<<studentName.length()<<endl;
    cout<<"First Character of the string is: "<<studentName[0]<<endl;
    cout<<"Last Character of the string is: "<<studentName[studentName.length()-1]<<endl;

    cout<<"Substring of the string is: "<<studentName.substr(0, 7)<<endl;

    cout<<"Find the string is: "<<studentName.find("Saxena")<<endl;

    reverse(studentName.begin(), studentName.end());
    cout<<"Reverse of the string is: "<<studentName<<endl;

    reverse(studentName.begin(), studentName.end());

    string palindrome = "madam";
    string original = palindrome;
    reverse(palindrome.begin(), palindrome.end());
    if(palindrome == original)
    {
        cout<<"The string is a palindrome"<<endl;
    }
    else
    {
        cout<<"The string is not a palindrome"<<endl;
    }

    return 0;
}