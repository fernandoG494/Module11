// BASIC GET FETCH
const url = 'https://api.github.com/users/shrutikapoor08/repos'; 

fetch(url)
    .then(response => response.json())
    .then(repos => { 
    	const reposList = repos.map(repo => repo.name);
    	console.log(reposList);
    })
    .catch(err => console.log(err))


// POST FETCH
const params = { id: 123 }

const options = {
    method: 'POST', // POST, PUT, PATCH, DELETE
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
}

const response = await fetch('url', options);
const data = await response.json();

