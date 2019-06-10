function breakingRecords(scores) {
    let minScore = scores[0];
    let maxScore = scores[0];
    let arr = [0, 0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            arr[0] += 1;
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            arr[1] += 1;
            minScore = scores[i];
        }
    }
return arr