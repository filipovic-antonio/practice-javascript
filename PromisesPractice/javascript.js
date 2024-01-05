console.log(1);

const promise = new Promise((res) => {
    setTimeout(() => {
        res(2);
    }, 3000);
})

promise.then((val) => {
    console.log(val);
    console.log(3);
})
