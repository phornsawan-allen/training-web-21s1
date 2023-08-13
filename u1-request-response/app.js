const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('better world')
})

app.get('/html', (req, res) => {
    res.send(`
      <html><body>
        <h1>Technologies</h1>
        <ul>
          <li>JavaScript</li>
          <li>Node</li>
          <li>Express</li>
        </ul>
      </body></html>
    `)
  })
  
  app.get('/json', (req, res) => {
    res.json({
      technologies: [
        'JavaScript', 'Node', 'Express'
      ]
    })
  })

  app.get('/status', (req, res) =>{
      res.sendStatus(200)
  })

  app.get('/html-pic', (req, res) => {
      res.send(`
      <html><body>
     <h1>Hello</h1>
     <img src="/hello.jpg" width="300" />
   </html></body>
`)
  })
  
app.use(express.static('public'))

const PORT = 3000
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
