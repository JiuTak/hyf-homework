function factorial(num) {
    let result = 1;
    if (num === 0 ) {
        return 1;
    }

    for (let i = 0; i < num; i--) {
        result = result * i
    }
    return result;
}

console.log(factorial(5));