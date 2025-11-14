#include<iostream>
using namespace std;


int linearSearch(int arr[], int size, int key)
{
    for(int index=0;index<size;index++)
    {
        iterationCount++;
         if(arr[index]==key)
         {
            return index;
         }
    }
    return -1;
}

int binarySearchAlgorithm (int arr[],int size, int key)
{
    int start=0, end = size-1;
    while(start<=end)
    {
        int mid = (start+end)/2;
        cout<<mid<<endl;
        if(arr[mid] == key)
        {
            return mid;
        }
        else if(arr[mid]<key)
        {
            start=mid+1;
        }
        else{
            end=mid-1;
        }
    }
    // cout<<"Iteration Count for Binary Search = "<<iterationCount<<endl;
    return -1;
}

int main(){
    int numbers[5]={10,20,30,40,50};
    cout<<"Linear Search Result  is "<< linearSearch(numbers,5,10)<<endl;
    cout<<"Binary Search Result  is "<< binarySearchAlgorithm(numbers,5,10)<<endl;
    //              // 0 ,1 , 2 ,3 ,4 - Indexing

    //              cout<<"First Element"<<numbers[0]<<endl;
    //              cout<<"Second Element"<<numbers[1]<<endl;

    // int arr[5];
    // cout<<"Enter 5 Elements: ";
    // for(int index=0;index<5;index++)
    // {
    //     cin>>arr[index];
    // }

    // cout<<"Array Elements are: ";
    // for(int index=0;index<5;index++)
    // {
    //     cout<<arr[index]<<" ";
    // }

    return 0;
}