function onButtonClick() {
    async function randomImage () {
    try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.message;
    document.getElementById('randomImage').src = imageUrl;
    } catch {
    
 }
}
randomImage();
}
async function randomImage () {
    try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    const imageUrl = data.message;
    document.getElementById('randomImage').src = imageUrl;
    } catch {
    
 }
}
randomImage();
