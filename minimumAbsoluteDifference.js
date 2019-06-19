function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let arr2 = [];
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] === arr[i + 1]) {
            return 0
        }
        let sub = Math.abs(arr[i] - arr[i + 1]);
        arr2.push(sub);
        i++;
    }
    let min = Math.min(...arr2);
    return min
}