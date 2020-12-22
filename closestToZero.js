function closestToZero(arr) {
    if (arr.length > 0) {
        let current = arr[0];

        arr.forEach((i) => {
            if (i > 0 && i <= Math.abs(current)) {
                current = i;
            }
            else if (i < 0 && (Math.abs(i) < Math.abs(current))) {
                current = i;
            }
        });

        return current;
    }
    else {
        return 0;
    }
}

let ts = [7, -10, 13, 8, 4, -7.2, -12, -3.7, 3.5, -9.6, 6.5, -1.7, 1.7, -6.2, 7];

let result = closestToZero(ts);

console.log(result);
