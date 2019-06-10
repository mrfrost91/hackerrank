function divisibleSumPairs(n, k, ar) {
    let result = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = ar[i];
            sum += ar[j];
            if (sum % k === 0) {
                result++;
            }
        }
    }
    return result
}