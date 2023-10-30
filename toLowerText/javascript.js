let val = 'I love JavaScript!';
val = val.toLowerCase();
let vowels = ['a', 'e', 'i', 'o', 'u'];
vowels.forEach((letter, index) =>{
    val =  val.replaceAll(letter, index);
});
console.log(val);