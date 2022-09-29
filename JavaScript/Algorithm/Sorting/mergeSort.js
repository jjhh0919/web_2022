/*
폰 노이만 : 최초의 합병 정렬 프로그램 작성
분할 => 정렬 => 합병
배열을 더 작은 배열(요소가 0 or 1이 될 때까지)로 나누고 다시 합병하는 방식(분할 정복)
합병시키면서 정렬
*/

// 배열 합병
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// 합병 정렬(재귀)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

/*
시간복잡도 : O(nlogn)
선형 : O(n)
*/
