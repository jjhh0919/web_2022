/*
합병 정렬과 같은 가정으로 작동(분할 => 개별적으로 정렬) => 재귀
피벗 : 기준
피벗을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽 => 반복
*/

// 피벗
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, index, nextIndex) => {
    [arr[index], arr[nextIndex]] = [arr[nextIndex], arr[index]];
  };

  // 피벗을 첫번째 요소로
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// 퀵 정렬
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

/*
시간복잡도 : O(nlogn)
Worst : O(n²)
*/
