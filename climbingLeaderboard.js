function climbingLeaderboard(scores, alice) {
    let arr = [];
    let x = 0;
    let y = 0;
    for (let k = 0; k < scores.length; k++) {
        if (scores[k - 1] === scores[k] && k > 0) {
            y++;
        }
    }
    for (let i = 0; i < alice.length; i++) {
        if (alice[i - 1] === alice[i] && i > 0) {
            arr.push(arr[arr.length - 1]);
        } else {
            for (let j = 0; j < scores.length; j++) {
                if (scores[j - 1] === scores[j] && j > 0) {
                    x++;
                }
                if (alice[i] < scores[scores.length - 1]) {
                    arr.push(scores.length + 1 - y);
                    break
                }
                if (alice[i] >= scores[0]) {
                    arr.push(1);
                    break
                }
                if ((alice[i] < scores[j - 1] && alice[i] > scores[j]) || (alice[i] === scores[j])) {
                    arr.push(scores.indexOf(scores[j]) + 1 - x);
                    break
                }
            }
            x = 0;
        }
    }
    return arr
}