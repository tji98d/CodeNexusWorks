const quickSortRandomPivot = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(Math.random() * arr.length);
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== pivotIndex) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSortRandomPivot(left).concat(pivot, quickSortRandomPivot(right));
};
