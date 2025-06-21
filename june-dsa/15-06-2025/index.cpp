#include<iostream>
#include <vector>
using namespace std;


void printArray(int arr[], int n){
     for(int index=0;index<n;index++)
    {
        cout<<"ARR ["<<index<<"] : "<<arr[index]<<endl;
    }
}
void reverseArray(int arr[],int n)
{
    int start=0;
    int end=n-1;
    while(start<=end)
    {
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
    printArray(arr,n);
}

int bubbleSort(int arr[], int n){
    for(int index=0;index<n-1;index++)
    {
        for(int j=0;j<n-index-1;j++)
        {
            // 0  1 2 3 4
            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
            }
        }
    }
    for(int index=0;index<n;index++)
    {
        cout<<"ARR ["<<index<<"] : "<<arr[index]<<endl;
    }
    return 0;
}

void selectionSort(int arr[], int n){
    for(int i=0;i<n-1;i++)
    {
        int minIndex=i;
        for(int j=i+1;j<n;j++)
        {
            if(arr[j]<arr[minIndex])
            {
                minIndex=j;
            }
        }
        swap(arr[i],arr[minIndex]);
    }
    printArray(arr,n);
}

// 9 8 7 6 5
// i 
// MinimumIndex = 0;
// j = arr[1]=8
// if (arr[1]<arr[0])
// 5 9 8 7 6
//   i 
// 5 6 9 8 7
// 

// 9 8 7 6 5
// i       j
// swap()
// 5 8 7 6 9
//   i   j
// swap()
// 5 6 7 8 9
    // ij
void insertionSort(int arr[],int n)
{
    for( int i=1;i<n;i++){
        int element=arr[i];
        int j = i - 1;
        while(j>=0 && arr[j]>element)
        {
            arr[j+1]=arr[j];
            j--;
        }
arr[j+1]=element;
    }
    printArray(arr,n);
    cout<<"Reversed Array"<<endl;
    reverseArray(arr,n);
}
// 65 25 12 22 11
// arr[1]=element=25;
// int j = 0;
// arr[0] = 65 > element
// arr[j+1]=65
// j-- => -1
// arr[j+1]=25;



int main(){
    int arr[]={
       65,25,12,22,11
    };
    insertionSort(arr,5);
    vector<int> temp;
    temp.push_back(4);
    // temp.pop_back();
    cout<<temp[0]<<endl;
    cout<<temp.size()<<endl;
    // temp.empty();
    temp.clear();
return 1;
}

//   5 3 4 2 6
//   3 5 4 2 6
//   3 4 5 2 6
//   3 4 2 5 6
//   3 2 4 5 6
//   2 3 4 5 6

// 
//  1 2 3 4
//  4 5 6 7
//  8 9 0 1
// Vector
// 