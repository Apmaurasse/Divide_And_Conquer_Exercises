function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1; 
    let count = 0; 
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2); 
  
      if (arr[mid] === 0) {
        count = arr.length - mid; 
        right = mid - 1;
      } else {
        left = mid + 1; 
      }
    }
  
    return count;
  }

module.exports = countZeroes