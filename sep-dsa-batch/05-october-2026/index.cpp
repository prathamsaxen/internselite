#include <iostream>
using namespace std;

// Linear Search
int linearSearch(int arr[], int size, int target) {
    for(int index = 0; index < size; index++) {
        if(arr[index] == target) {
            return index;
        }
    }
    return -1;
}

// O(n)



// Binary Search
int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;
    while(left <= right) {
        int mid = (left + right) / 2;
        if(arr[mid] == target) {
            return mid;
        }
        else if(arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return -1;
}


void selectionSort(int arr[],int n)
{
    for(int i = 0; i < n-1; i++){
        int minIndex = i;
        for(int j = i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}
// O(n^2) = Time Complexity



void buddleSort(int arr[],int n)
{
    for(int i = 0; i < n-1; i++){
        bool swapped = false;
        for(int j = 0;j<n-i-1;j++){
            if(arr[j] > arr[j+1]){
                swap(arr[j], arr[j+1]);
                swapped = true;
            }
        }
        if(swapped == false){
            break;
        }
    }
}

void insertionSort(int arr[],int n)
{
    for(int i = 1; i < n; i++){
        int key = arr[i];
        int j = i-1;// Trace of last index
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}

// O(n^2) = Time Complexity

int main() {
    // int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    // int size = sizeof(arr) / sizeof(arr[0]);
    // int target = 7;
    // int result = binarySearch(arr, size, target);
    // cout << "Binary Search Result: " << result << endl;

    // result = linearSearch(arr, size, target);
    // cout << "Linear Search Result: " << result << endl;
    int arr[] = {5, 4, 3, 2, 1};
    int n = sizeof(arr) / sizeof(arr[0]);
    // buddleSort(arr, n);
    // for(int i = 0; i < n; i++){
    //     cout << arr[i] << " ";
    // }

    // selectionSort(arr, n);
    insertionSort(arr, n);
    for(int i = 0; i < n; i++){
        cout << arr[i] << " ";
    }
    cout << endl;
    
    return 0;
}