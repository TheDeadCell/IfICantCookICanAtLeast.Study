
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define SIZE 10

// Function to swap two elements
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

// Function to sort an array using bubble sort
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(&arr[j], &arr[j + 1]);
            }
        }
    }
}

int main() {
    int numbers[SIZE];

    // Seed random number generator
    srand(time(0));

    // Generate random numbers
    printf("Unsorted random numbers:\n");
    for (int i = 0; i < SIZE; i++) {
        numbers[i] = rand() % 100; // Random numbers between 0 and 99
        printf("%d ", numbers[i]);
    }
    printf("\n");

    // Sort the array
    bubbleSort(numbers, SIZE);

    // Display sorted numbers
    printf("Sorted random numbers:\n");
    for (int i = 0; i < SIZE; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");

    return 0;
}
