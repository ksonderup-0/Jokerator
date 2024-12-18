
/*async function getJoke() {
    const url = "https://v2.jokeapi.dev/joke/Christmas?amount=3";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        const data = json;
    } catch (error) {
        console.error(error.message);
    }
}*/
/*
// Fetch data from an API
const url = "https://v2.jokeapi.dev/joke/Christmas?amount=3";
fetch(url)
    .then(response => response.json())
    .then(data => displayData(data))
    .catch(error => console.error('Error fetching data:', error));

function displayData(data) {
    const dataDiv = document.getElementById('data');
    data.forEach(item => {
        const post = document.createElement('div');
        post.innerHTML = `<h2>${item.title}</h2><p>${item.body}</p>`;
        dataDiv.appendChild(post);
    });
}
*/
/*const getJoke = () => {
    const url = "https://v2.jokeapi.dev/joke/Christmas?amount=1";
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error("Bad Server Response");
            }
            return res.json();
        })
        .then(data => {
            const jokes = data.jokes.map(joke =>
                joke.type === "single" ? `<p>${joke.joke}</p>` : `<p>${joke.setup}<br>${joke.delivery}</p>`
            ).join('');
            document.getElementById("data").innerHTML = jokes;
        })
        .catch(err => console.error('Error fetching joke:', err));
}*/

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = "https://v2.jokeapi.dev/joke/Christmas?amount=1";
    const responseContainerJoke = document.getElementById('apiResponse');
    const responseContainerAnswer = document.getElementById('apiResponseAnswer');
    setTimeout(() => {
        responseContainerAnswer.classList.add('show');
    }, 5000);

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            responseContainerJoke.innerHTML = JSON.stringify(data.setup, null, 2);
            responseContainerAnswer.innerHTML = JSON.stringify(data.delivery, null, 2);
        })
       
       
       .catch(error => {
            responseContainerJoke.innerHTML = 'Error: ' + error.message;
        });
});

