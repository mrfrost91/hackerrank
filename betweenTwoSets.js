function getTotalX(a, b) {
    let arr = [];
    let mult = 0;
    let m = 1;
    let maxA = Math.max(...a);
    let minB = Math.min(...b);
    while (mult < minB) {
        mult = maxA * m;
        m++;
        if (a.every((e) => mult % e === 0)) {
            if (b.every((el) => el % mult === 0)) {
                arr.push(mult);
            }
        }
    }
    return arr.length
}