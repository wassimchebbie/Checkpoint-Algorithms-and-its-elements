function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        // Shift elements in the sorted part of the array to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place the current element in its correct position
        arr[j + 1] = current;
    }
    return arr;
}

// Example array
const array = [12, 11, 13, 5, 6];
console.log("Unsorted array:", array);
console.log("Sorted array:", insertionSort(array));
