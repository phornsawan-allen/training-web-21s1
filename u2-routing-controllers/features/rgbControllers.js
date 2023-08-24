const getRgbByQuery = (req, res) => {
  console.log(req.query)
  const red = parseInt(req.query.r || '0')
  const green = parseInt(req.query.g || '0')
  const blue = parseInt(req.query.b || '0')
  const average = Math.round((red + green + blue) / 3)

  console.log({ red, green, blue, average })

  res.send(`<html><body style="background-color: rgb(${red}, ${green}, ${blue});color: ${
    average < 128 ? 'white' : 'black'
  };">
    <p>red: ${red}, green: ${green}, blue: ${blue}</p>
    <p>avg: ${average}</p>
     </body></html>`)
}
module.exports = {
  getRgbByQuery
}
