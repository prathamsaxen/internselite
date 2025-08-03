#include<iostream>
using namespace std;

int linearSearch(int arr[],int key){

    for(int index=0;index<6;index++)
    {
        if(arr[index]==key)
        {
            return index; // Element Present in the loop
        }
    }
    return -1; // Element Absent from the Loop
}

int main(){
    int arr[]={1,5,9,8,4,2};
cout<<linearSearch(arr,10)<<endl;
    return 0;
}