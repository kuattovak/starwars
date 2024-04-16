document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://swapi.dev/api/people/';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const characters = data.results;
        const container = document.getElementById('characters-list');
        characters.forEach(character => {
            const charDiv = document.createElement('div');
            charDiv.className = 'character';
            charDiv.onclick = () => {
                // Store character details in localStorage or pass via URL
                localStorage.setItem('currentCharacter', JSON.stringify(character));
                window.location.href = 'details.html';
            };


            const charImage = document.createElement('img');
            charImage.src = 'assets/star-wars-4.svg'; // Example image
            charImage.width = '200px';
            charImage.height = '100px';
            charDiv.appendChild(charImage);

            const nameElement = document.createElement('h2');
            nameElement.innerText = character.name;
            charDiv.appendChild(nameElement);

            const genderElement = document.createElement('p');
            genderElement.innerText = `Gender: ${character.gender}`;
            charDiv.appendChild(genderElement);


            const eyeColorElement = document.createElement('p');
            eyeColorElement.innerText = `Eye color: ${character.eye_color}`;
            charDiv.appendChild(eyeColorElement);

            const hairColorElement = document.createElement('p');
            hairColorElement.innerText = `Hair color: ${character.hair_color}`;
            charDiv.appendChild(hairColorElement);

            const massElement = document.createElement('p');
            massElement.innerText = `Mass: ${character.mass}`;
            charDiv.appendChild(massElement);

            container.appendChild(charDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('title').innerText = 'Failed to load character data';
    });
});

window.addEventListener("scroll", (event) => {
    if(window.scrollY >= 100){
        document.querySelector('.header').classList.add('scroll');
    } else {
        document.querySelector('.header').classList.remove('scroll');
    }
});

var gradients = document.querySelectorAll('.container');
gradients.forEach(container => {
    container.addEventListener("scroll", (e) => {
        const gradient = e.target.querySelector('.logo-gradient');
        const gradient2 = e.target.querySelector('.logo-gradient.second');
        const scrollPercentage = (e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)) * 100;
        
        if (scrollPercentage < 100) {
            gradient.classList.remove("hide");
        } else {
            gradient.classList.add("hide");
        }
        if (scrollPercentage > 0) {
            gradient2.classList.remove("hide");
        } else {
            gradient2.classList.add("hide");
        }
    });
});

function scrolling(targetId, direction) {
    const container = document.getElementById(targetId);
    const scrollAmount = 300; // Adjust the pixel amount as necessary

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else {
        container.scrollLeft += scrollAmount;
    }
}

let forward = document.getElementById('about-menu');

forward.addEventListener('click', function(){
  
  let catContent = document.querySelectorAll('.category-content');
  
  catContent.forEach(item=>{
    item.parentNode.removeChild(item);
    let clonedContent = item.cloneNode(true);
    document.getElementsByClassName('about').appendChild(clonedContent);
  })
  
})



