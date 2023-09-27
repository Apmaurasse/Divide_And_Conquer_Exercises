function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
    const n = arr.length;
  
    while (left <= right) {
      // If the array is already sorted, the rotation count is 0
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      const mid = Math.floor((left + right) / 2);
      const next = (mid + 1) % n;
      const prev = (mid - 1 + n) % n;
  
      // If the middle element is the minimum (the point of rotation)
      if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
        return mid;
      }
  
      if (arr[mid] <= arr[right]) {
        // The right half is sorted, so the rotation point is in the left half
        right = mid - 1;
      } else {
        // The left half is sorted, so the rotation point is in the right half
        left = mid + 1;
      }
    }
  
    return 0; // If not found, return 0 (no rotation)
  }
  

module.exports = findRotationCount