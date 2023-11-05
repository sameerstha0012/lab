function sum(arr) {
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 20) {
            total += arr[i];
        }
    }

    return total;
}

// Test
let nums = [1, 15, 25, 68, 28, 26];
let result = sum(nums);
console.log("Sum of " + nums + " is : " + result);