const button = document.querySelector('button');

function randomQuotes() {
    const quotes = {
        '- Oscar Wilde' : 'Be yourself; everyone else is already taken.',
        '- Ralph Waldo Emerson' : 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        '- Aristotle' : 'It is during our darkest moments that we must focus to see the light.',
        '- Martin Luther King Jr.' : 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
        '- Mother Teresa' : 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        '- John Lennon' : "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        '- Henry David Thoreau' : "Go confidently in the direction of your dreams! Live the life you've imagined.",
        '- Robert Frost' :  "In three words I can sum up everything I've learned about life: it goes on.",
        '- Dr. Seuss' : "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        '- Thomas A. Edison' : "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        '- Eleanor Roosevelt' : 'The future belongs to those who believe in the beauty of their dreams.', 
        '- Thomas Jefferson' : 'I find that the harder I work, the more luck I seem to have.'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)];
    let quote = quotes[author];

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}

button.addEventListener('click', randomQuotes);