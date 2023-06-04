function binarySearch() {
    const arrayInput = document.getElementById("array");
    const targetInput = document.getElementById("target");
    const result = document.getElementById("result");
    
    const array = arrayInput.value.trim().split(",").map(Number);
    const target = Number(targetInput.value);
    
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        result.textContent = `Found ${target} at index ${mid}`;
        return;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    result.textContent = `${target} not found in array`;
  }