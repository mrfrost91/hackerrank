function largestPermutation(k, arr) {
    let n = arr.length;
    let number = 0;
    let max = Math.max(...arr);
    if (k > n) {
        k = n;
    }
    for (let i = 0; i < k; i++) {
        if (arr[i] !== max) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] === max) {
                    let number = arr[i];
                    arr[i] = arr[j];
                    arr[j] = number;
                }
            }
        } else {
            k += 1;
        }
        max--;
    }
    return arr
}