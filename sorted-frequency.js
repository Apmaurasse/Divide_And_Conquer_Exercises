function sortedFrequency(arr, num) {
    function findFirstIndex(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let firstIndex = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          firstIndex = mid;
          right = mid - 1; // Search the left half for the first occurrence
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return firstIndex;
    }
  
    function findLastIndex(arr, num) {
      let left = 0;
      let right = arr.length - 1;
      let lastIndex = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (arr[mid] === num) {
          lastIndex = mid;
          left = mid + 1; // Search the right half for the last occurrence
        } else if (arr[mid] < num) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return lastIndex;
    }
  
    const firstIndex = findFirstIndex(arr, num);
    const lastIndex = findLastIndex(arr, num);
  
    if (firstIndex !== -1 && lastIndex !== -1) {
      return lastIndex - firstIndex + 1;
    }
  
    return 0; // Number not found in the array
  }

module.exports = sortedFrequency