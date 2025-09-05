#include<iostream>
using namespace std;

int main(){
    int arr[]={1,2,3,4,6,7,9};
    int key=7;


    // Linear Search
    // int interationCount=0;
    for(int index=0;index<7;index++)
    {
        // interationCount++;
        if(key==arr[index])
        {
            cout<<"Data is ==> "<<index<<endl;
            break;
        }
    }
    // cout<<"Iterations Count for Approach Linear Search ===> "<<interationCount<<endl;


    // Binary Seach
    // interationCount=0;
    int start=0;
    int end=6;
    int midIndex=((start+end)/2);
    while(start<=end)
    {
        // interationCount++;
        if(arr[midIndex]==key)
        {
            cout<<"Data is at index ===> "<<midIndex<<endl; 
            break;
        }
        else if(key<arr[midIndex])
        {
            end=midIndex-1;
        }
        else{
            start=midIndex+1;
        }
        midIndex=((start+end)/2);
    }
    // cout<<"Iterations Count for Approach Binary Search ===> "<<interationCount<<endl;
    return 0;
}