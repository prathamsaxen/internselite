// Array is a collection of eklements of same type of data with continuos memory allocation.
#include <iostream>
using namespace std;

// Subscript Opertor []

int linearSearch(int key, int arr[])
{
    for(int index=0;index<4;index++)
    {
        if(arr[index]==key)
        {
       return index;
        }
    }
    return -1;
}

int binarySearch(int key, int arr[])
{
    int start =0;
    int end = 3;
    while(start<=end)
    {
        int mid = (start+end)/2;
        if(arr[mid]==key)
        {
            return mid;
        }
        else if(arr[mid]<key)
        {
            start = mid+1;
        }
        else
        {
            end=mid-1;
        }
    }
    return -1;
}

// O(n);

int main(){
    int arr[10];
    int arr2[3]={1,5,10};
    int arr3[]={5,6,7,8};
    cout <<" ARR => "<< arr[0]<<endl;
    cout <<" ARR2 => "<< arr2[0]<<endl;
    cout <<" ARR3 => "<< arr3[0]<<endl;

    // Indexing 0 => N - 1;

    // for(int index=0;index<4;index++)
    // {
    //     cout<<"ARR ["<<index<<"] => "<<arr3[index]<<endl;
    // }
    // cout<<"Enter the Values for the provided Array?"<<endl;
    // for(int index=0;index<10;index++)
    // {
    //     cout<<"Enter ARR["<<index<<"] : ";
    //     cin>>arr[index];
    // }
    //   cout<<"Printing all Elements of the Array:"<<endl;
    //    for(int index=0;index<10;index++)
    // {
    //     cout<<"Enter ARR["<<index<<"] => "<<arr[index]<<endl;
    // }
    cout<<"Element at Index => "<<binarySearch(16,arr3)<<endl;
    return 1;
}


// Searching Array
