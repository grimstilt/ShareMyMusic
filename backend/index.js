const express = require('express')
const app = express()

let playlist = [
    {
        "Artist": "King Crimson",
        "Album": "Discipline",
        "Track": "Elephant Talk",
        "Year": 1981,
        "Genre": ["Progressive Rock", "New Wave", "Art Rock", "Dance Rock"],
    },
    {
        "Artist": "Swans",
        "Album": "Cop",
        "Track": "Cop",
        "Year": 1984,
        "Genre": ["Industrial", "Noise Rock"],
    },
]

app.get('/', (request, response) => {
    response.send('<h1>Hey there!</h1>')
})

app.get('/playlist', (request, response) => {
    response.json(playlist)
})

const PORT = 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    
})