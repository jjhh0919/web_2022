/*
이진 검색
확인을 할 때마다 절반 제거
분류(정렬)가 필수
중앙을 기준으로 값이 큰지 작은지 비교 => 찾을때까지 반복
분할 정복(Divide and Conquer)
*/

// Original Solution
function binarySearch1(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (array[middle] === value) {
    return middle;
  }
  return -1;
}

// Refactored Version
function binarySearch2(array, value) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (array[middle] !== value && start <= end) {
    if (value < array[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return array[middle] === value ? middle : -1;
}

/*
시간복잡도
Best O(1)
Average O(log n)
Worst O(log n)
*/
