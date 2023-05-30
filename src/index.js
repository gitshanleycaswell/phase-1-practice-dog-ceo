console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then((r) => r.json())
.then((dogs) => renderDogs(dogs.message))

const imageContainer = document.getElementById("dog-image-container")
function renderDogs(dogs){
    dogs.forEach(dog => {
        // const image = document.createElement('img')
        // image.src = dog
        // imageContainer.appendChild(image)
    })
}

fetch("https://dog.ceo/api/breeds/list/all")
.then((r) => r.json())
.then((breeds) => renderBreeds(breeds.message))


function renderBreeds(breeds){
    let ul = document.getElementById('dog-breeds')

    for(let breed in breeds){
        const li = document.createElement('li')
        
        if(breeds[breed].length === 0){
            ul.appendChild(li)
            li.textContent = breed
        }
        else if(breeds[breed].length !== 0){
            breeds[breed].forEach((subBreed) =>{
                ul.appendChild(li)
                li.textContent = `${subBreed } ${breed} `
            })
        
            li.addEventListener('click', (event) =>{
                li.style = "color: red"; 
            })
        
        }
    }
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', function(event) {
        let selectedLetter = dropdown.value 
        ul.innerHTML = " "
        for(let breed in breeds){
            if(breed.charAt(0) === selectedLetter){
                const li = document.createElement('li')
                
                if(breeds[breed].length === 0){
                    ul.appendChild(li)
                    li.textContent = breed
                }
                else if(breeds[breed].length !== 0){
                    breeds[breed].forEach((subBreed) =>{
                        ul.appendChild(li)
                        li.textContent = `${subBreed } ${breed} `
                    })
                
                    li.addEventListener('click', (event) =>{
                        li.style = "color: red"; 
                    })
                
                }
            }
        }
            
        
        
    })
}







