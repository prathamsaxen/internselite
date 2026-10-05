// Binary Seach algorithm
#include <iostream>
using namespace std;

// Binary Search Algorithm
// Iterations Count: O(log n)
// Iterations Count Number : 4
int binarySearch(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;
    int iterationsCount = 0;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
        iterationsCount++;
    }
    cout << "Iterations Count: " << iterationsCount << endl;
    return -1;
}


// Linear Search Algorithm
// Iterations Count: O(n)
// Iterations Count Number : 10
int linearSearch(int arr[], int size, int target) {
    int iterationsCount = 0;
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i;
        }
        iterationsCount++;
    }
    cout << "Iterations Count: " << iterationsCount << endl;
    return iterationsCount;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int size = sizeof(arr) / sizeof(arr[0]);
    int target = 10;
    int result = binarySearch(arr, size, target);
    int result2 = linearSearch(arr, size, target);
    cout << "Result: " << result << endl;
    cout << "Result2: " << result2 << endl;
    return 0;
}

// We are goinf to calculate time complexities of different algorithms.

// Algorithm Number 1: linear seach


// int linearSearch(int arr[], int size, int target) {
//     int iterationsCount = 0; // We Ignore It
//     for (int i = 0; i < size; i++) { // n
//         if (arr[i] == target) { // n
//             return i;
//         }
//         iterationsCount++;
//     }
//     cout << "Iterations Count: " << iterationsCount << endl; // We Ignore It
//     return iterationsCount; // We ignore it
// }

// O (n + n + n + n)
// O(n)

// Nested loops algorithm
// for(int i = 0; i < n; i++) {
//     for(int j = 0; j < n; j++) {
//         // O(1)
//     }
// }

// O(n * n)
// O(n^2)

// 3 Nested loops algorithm
// for(int i = 0; i < n; i++) {
