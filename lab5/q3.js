function concat(...args) {
    const result = [];
    args.forEach(arg => {
        if (Array.isArray(arg)) {
            result.push(...arg);
        } else if (typeof arg === 'string') {
            result.push(...arg.split(''));
        }
    });
    return result;
}

// Test
const concat_result = concat('hi', [1, 2, 3], ['Hello', 'world']);
console.log("Concat Result of given input is : " + concat_result)