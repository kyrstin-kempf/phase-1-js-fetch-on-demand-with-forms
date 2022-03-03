const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (handleEvent) => {
        handleEvent.preventDefault();
        const input = document.querySelector('input#searchByID');
        // console.log(handleEvent);
        
        console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
            // console.log(data);
        });
    });
}

document.addEventListener('DOMContentLoaded', init);

// event.target.children[1].value