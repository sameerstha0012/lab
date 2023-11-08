function printNumber(from, to){
    const timerId = setInterval(() => {
        if(from > to){
            clearInterval(timerId);
        } else {
            console.log(from++);
        }
    }, 1000);   
}

printNumber(1, 10);