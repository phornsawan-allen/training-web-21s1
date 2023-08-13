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

  app.get('/labs', (req, res) => {
      res.send(`
      <html><body>
  <li>1. <a href="/profiles/charles">/profiles/charles</a></li>
  <li>2. <a href="/api/profiles/charles">/api/profiles/charles</a></li>
  <li>3. <a href="/cat-simulator">/cat-simulator</a></li>
  <li>4. <a href="/admin/grades">/admin/grades</a> AND <a href="/api/grades">/api/grades</a> AND <a href="/boredom">/boredom</a></li>
</body></html>
`)
  })

  app.get('/profiles/charles', (req, res) => {
      res.send(`
      <html><body>
      <h1>Charles Allen</h1>
      <ul>
        <li>Nickname: Chaz</li>
        <li>Like: Web Development,Agile,Lean</li>
        <li>Motto: Health;Happiness;Excellence</li>
      </ul>
    </body></html>
      `)

  })

  app.get('/api/profiles/charles', (req, res) => {
      res.json({
          "name": "Charles Allen",
          "nickname": "Chaz",
          "likes": [
              "Web Development",
              "Agile",
              "Lean"
          ],
          "motto": "Health; Happiness; Excellence"
      })
    })
app.get('/cat-simulator', (req, res) => {
    res.send(`
    <html>
    <head><link rel="stylesheet" href="/styles.css"></head>
<body class="cats">
    <a href="cat-result">Pet the cat</a >
    <img src="/hello.jpg" width="300" />
  </body></html>
    `)
})
      


  
app.get('/cat-result', (req, res) => {
    res.send(`
    <html>
    <head><link rel="stylesheet" href="/styles.css"></head>
<body class="cats">
    <a href="cat-simulator">Ignore the cat</a >
    <img src="/hello1.jpg" width="300" />
  </body></html>
    `)
})

app.get('/admin/grades', (req, res) =>{
    res.sendStatus(401)
})

app.get('/api/grades', (req, res) =>{
    res.status(401).send('Invalid OAuth token')
})

app.get('/boredom', (req, res) =>{
    res.status(404).send('Sorry - we dont have that here')
})
  
app.use(express.static('public'))

const PORT = 3000
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`))
