function climbingLeaderboard(scores, alice) {
    let arr = [];
    let setArr = [];
    let i = 0;
    while (i < scores.length) {
        if (scores[i + 1] !== scores[i]) {
            setArr.push(scores[i]);
            i++;
        } else {
            i++;
        }
    }
    let k = setArr.length;
    for (let j = 0; j < alice.length; j++) {
        while (k >= 0) {
            if (alice[j] >= setArr[k - 1]) {
                k--;
            } else {
                arr.push(k + 1);
                break
            }
        }
    }
    return arr
}