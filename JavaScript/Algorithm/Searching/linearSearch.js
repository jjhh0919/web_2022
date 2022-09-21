/*
Linear Search(선형 검색)
해당 값을 찾거나 맨 끝에 도달할 때까지 계속 확인
indexOf, includes, find, findIndex
*/

function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

/*
시간복잡도
Best O(1)
Average O(n)
Worst O(n)
*/
