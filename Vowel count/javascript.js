const form = document.querySelector('form');

function checkVowels(event){
    event.preventDefault();

 
        let inputBox = document.getElementById('inputText').value;
        let vowelCounter = (inputBox.match(/[aeiouAEIO]/g) || []).length;
        alert("Number of vowel: " + " " + vowelCounter);
    }

form.addEventListener('submit', checkVowels);



