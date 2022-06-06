// Still have some bugs

const pivot = (arr, startIndex = 0, endIndex = arr.length + 1) => {
  const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  let pivotIndex = arr[startIndex];
  let swapIndex = startIndex;

  for (let idx = startIndex + 1; idx < endIndex; idx++) {
    const element = arr[idx];
    if (pivotIndex > element) {
      swapIndex++;
      swap(arr, swapIndex, idx);
    }
  }
  swap(arr, startIndex, swapIndex);
  //   console.log("arr", arr);
  return swapIndex;
};

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    // Left
    quickSort(array, left, pivotIndex - 1);
    // Right
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};

console.log(quickSort([5, 2, 1, 21, 50, 0, 6, 7, 20, 3]));
