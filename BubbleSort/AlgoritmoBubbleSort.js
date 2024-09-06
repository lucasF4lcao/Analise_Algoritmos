function bubbleSort(arr) {
  var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    var swapped = false;
    var j = 0;

    while (j < n - i - 1) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
      j++;
    }

    if (!swapped) {
      break;
    }
  }
  return arr;
}

var arr = [4, 3, 2, 1];
console.log(bubbleSort(arr));
