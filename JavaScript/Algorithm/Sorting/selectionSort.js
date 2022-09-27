/*
버블 정렬과 비슷하지만
큰 값을 배열 끝에 위치시키는 대신 작은 값을 한 번에 하나씩 위치에 배열
*/

function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// ES2015
function selectionSort2(arr) {
  const swap = (arr, index, nextIndex) =>
    ([arr[index], arr[nextIndex]] = [arr[nextIndex], arr[index]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

/*
시간복잡도 : O(n²)
교환(swap)이 적을수록 버블정렬보다 좋음
*/
