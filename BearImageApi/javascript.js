async function showPlaceBear() {
    try {
        const imageUrl = 'https://placebear.com/200/300.jpg';
        document.getElementById('imageBear').src = imageUrl;
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

showPlaceBear();
