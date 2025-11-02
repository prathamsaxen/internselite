// How to create a Cplus plus file?
#include<iostream>
using namespace std;

int main(){

    // Primitive Data Types
    int age = 19;
    // float range = 345.6;
    // char initials = 'P';
    // bool isEngineer = true;

    // cout<<"AGE ---> "<<age<<endl;
    // cout<<"Range ---> "<<range<<endl;
    // cout<<"initials ---> "<<initials<<endl;
    // cout<<"isEngineer ---> "<<isEngineer<<endl;

    // cout<<"Arithmetic Operators"<<endl;
    // cout<<"2 + 2 = "<<2+2<<endl;
    // cout<<"2 * 2 = "<<2*2<<endl;
    // cout<<"2 - 2 = "<<2-2<<endl;
    // cout<<"2 / 2 = "<<2/2<<endl;
    // cout<<"3 % 2 = "<<3%2<<endl;

    // cout<<"Relational Operators"<<endl;
    // cout<<"Equality Check Operator | 4 == 4"<<(4 == 4)<<endl;
    // cout<<"Equality Check Operator | 5 == 4"<<(5 == 4)<<endl;

    // cout<<"Not Equal Check Operator | 4 != 4"<<(4 != 4)<<endl;
    // cout<<"Not Equal Check Operator | 5 != 4"<<(5 != 4)<<endl;

    // cout<<"Greater or Less Than Operator | 4 > 4"<<(4 > 4)<<endl;
    // cout<<"Greater or Less Than Operator | 5 > 4"<<(5 > 4)<<endl;

    // Controlled Statements 
    // switch(age){
    //     case 20:cout<<"Age is 20"; break;
    //     case 22:cout<<"Age is 22"; break;
    //     case 24:cout<<"Age is 24"; break;
    //     case 26:cout<<"Age is 26"; break;
    //     default:cout<<"Age is "<<age; break;
    // }

    // int selections = (age>=18)?1:0;
    // selections=10;
    // switch(selections){
    //     case 1:cout<<"You can Drive the Car";break;
    //     case 0:cout<<"You can not";break;
    //     default:cout<<"Inavlid Input";break;

    // }
    if(age>18)
    {
        cout<<"You can drive the car"<<endl;
    }
    else if(age == 18)
    {
        cout<<"You can learn the car"<<endl;
    }
    else
    {
        cout<<"You can not even touch the car"<<endl;
    }

    return 0;
}