const endDate =  'March 7 2024';

function countDown () {
    const total = Date.parse(endDate) - new Date();
    let day = Math.floor(total / (1000 *60 *60 *24));
    let hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    let minut = Math.floor((total / 1000 / 60) % 60);
    let secs = Math.floor((total / 1000) % 60);
    return {
        day,
        hour,
        minut,
        secs
    };
}

function update() {
    let temp = countDown();
    let output = '';
    for(let property in temp) {
        output = `${property} ${temp[property]}`
    }
    console.log(output);
    setTimeout(update,1000);
}

update();