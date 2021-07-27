import jokes from "./library.js";

const jokeButton = document.querySelector('.getJoke');
const jokeText = document.querySelector('.joke');

const randomNumber = (length) => Math.floor(Math.random() * length);

function fetchJoke (){
    const joke = jokes[randomNumber(jokes.length)];
    jokeText.textContent = `${joke.setup} ${joke.punchline}`;
}

jokeButton.addEventListener('click', fetchJoke);


// fetchJoke(jokes);