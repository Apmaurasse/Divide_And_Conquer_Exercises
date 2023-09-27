function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid; // Found the number, return its index
      }
  
      if (arr[left] <= arr[mid]) {
        // Left half is sorted
        if (arr[left] <= num && num < arr[mid]) {
          right = mid - 1; // Search the left half
        } else {
          left = mid + 1; // Search the right half
        }
      } else {
        // Right half is sorted
        if (arr[mid] < num && num <= arr[right]) {
          left = mid + 1; // Search the right half
        } else {
          right = mid - 1; // Search the left half
        }
      }
    }

    return -1;
}

module.exports = findRotatedIndex