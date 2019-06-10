function kangaroo(x1, v1, x2, v2) {
    let pos1 = x1;
    let pos2 = x2;
    for (let i = 0; i < 10000; i++) {
        pos1 += v1;
        pos2 += v2;
        if (pos1 === pos2) {
            return 'YES'
        }
    }
    return 'NO'
}