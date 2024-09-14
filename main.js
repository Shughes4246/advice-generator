// Define the API URL
const apiUrl = 'https://api.adviceslip.com/advice';

const dice = document.getElementsByClassName('dice')[0];
function fetchAPI() {
    fetch(apiUrl)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        })
        .then(data => {
        console.log(data);

        const advice = data.slip.advice;
        const adviceCount = data.slip.id;
        const adviceText = document.getElementById('advice-text');
        const adviceNum = document.getElementById('num');

        // Insert the advice into the HTML element
        adviceText.innerText = '"' + advice + '"';
        adviceNum.innerText = adviceCount;
        })
        .catch(error => {
        console.error('Error:', error);
        const adviceText = document.getElementById('advice-text');
        adviceText.innerText = 'Failed to load advice. Please try again later.';
        });
}

fetchAPI();
dice.addEventListener('click', fetchAPI);