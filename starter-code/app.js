const express = require ('express')

const app = express();

app.use(express.static('public'))

app.get('/', (request, response, next) => {
  response.sendFile(__dirname + '/view/home-page.html')
})

app.get('/about', (request, response, next) => {
  response.sendFile(__dirname + '/view/about.html')
})

app.get('/gallery', (request, response, next) => {
  response.sendFile(__dirname + '/view/gallery.html')
})

app.listen(3000, () => {
  console.log('im working')
})