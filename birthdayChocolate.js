function birthday(s, d, m) {
    let sum = 0;
    let result = 0;
    for (let i = 0; i < s.length - m + 1; i++) {
        for (let j = i; j < m + i; j++) {
            sum += s[j];
        }
        if (sum === d) {
            result++;
        }
        sum = 0;
    }
    return result
}