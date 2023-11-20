let count = 0;

function startCounter(num) {
    count += num;
    document.getElementById('counterOutput').innerHTML = count;
}