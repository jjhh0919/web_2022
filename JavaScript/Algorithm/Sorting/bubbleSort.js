// 많이 사용되지 않음
/*
배열을 가장 작은 숫자에서 가장 큰 숫자순으로
오름차순으로 정렬을 한다면 더 큰 숫자가 한 번에 하나씩 뒤로 이동
처음부터 비교하고 교환 => 끝날때까지 반복
한 번 순환할때마다 가장 큰 수가 맨 뒤로 이동 => 순환할때마다 마지막 인덱스는 빼서 반복이 1씩 줄어듬
*/

// 교환(swap)
function swap1(arr, index, nextIndex) {
  let temp = arr[index];
  arr[index] = arr[nextIndex];
  arr[nextIndex] = temp;
}

// 교환 ES2015부터 가능(구조 분해)
function swap2(arr, index, nextIndex) {
  [arr[index], arr[nextIndex]] = [arr[nextIndex], arr[index]];
}

//버블정렬
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// 버블정렬(최적화) => 더이상 정렬하지 않아도 되면 끝
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

/*
시간복잡도 : O(n²)
최적화 : O(n)
*/
