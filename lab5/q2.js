function getNewArray(arr) {
    const newArray = arr.filter(function (str) {
        return str.length >= 5 && str.toLowerCase().includes('a');
    });

    return newArray;
}

// Test
let stringArray = ['USA', 'NEPAL', 'AUSTRALIA', 'CHINA', 'MONGOLIA'];
let filtered_result = getNewArray(stringArray);
console.log("Filtered Result of " + stringArray + " is : " + filtered_result);