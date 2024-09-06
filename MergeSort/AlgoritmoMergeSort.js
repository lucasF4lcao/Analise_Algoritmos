function mergeSort(arr, esquerda, direita) {
  if (esquerda < direita) {
    const meio = Math.floor((esquerda + direita) / 2);
    mergeSort(arr, esquerda, meio);
    mergeSort(arr, meio + 1, direita);
    merge(arr, esquerda, meio, direita);
  }
}

function merge(arr, esquerda, meio, direita) {
  const n1 = meio - esquerda + 1;
  const n2 = direita - meio;

  const L = new Array(n1);
  const R = new Array(n2);

  for (let i = 0; i < n1; i++) {
    L[i] = arr[esquerda + i];
  }
  for (let j = 0; j < n2; j++) {
    R[j] = arr[meio + 1 + j];
  }

  let i = 0,
    j = 0,
    k = esquerda;
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

const arr = [12, 11, 13, 5, 6, 7];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
