document.addEventListener('DOMContentLoaded', () => {

    const BASE_URL = `http://localhost:3000/dogs`
    const tableBody = document.getElementById('table-body')
    document.addEventListener("click", handleEvents)
    const dogForm = document.getElementById('dog-form')
    
    fetch(BASE_URL)
    .then(res => res.json())
    .then(dogs => dogs.forEach(getDog))

    