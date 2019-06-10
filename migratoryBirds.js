function migratoryBirds(arr) {
    let counter = 1;
    let maxCounter = 0;
    let number = 0;
    arr.sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            counter++;
        } else {
            counter = 1;
        }
        if (counter > maxCounter) {
            maxCounter = counter
            number = arr[i];
        }
    }
    return number