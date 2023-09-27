function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor to -1 (not found)
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === x) {
        return arr[mid]; // Found an exact match, return it as the floor
      }
  
      if (arr[mid] < x) {
        floor = arr[mid]; // Update the floor to the current element
        left = mid + 1; // Search in the right half for a larger floor
      } else {
        right = mid - 1; // Search in the left half for a smaller floor
      }
    }
  
    return floor; // Return the floor (the largest element <= x)
  }
  

module.exports = findFloor