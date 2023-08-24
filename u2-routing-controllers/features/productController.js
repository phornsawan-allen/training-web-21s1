const getProductByQuery = (req, res) => {
  console.log(req.query)

  const query = req.query.q
  const page = req.query.page || 1

  if (query) {
    res.send(`<html><body>
    <h1>Searching for ${query}</h1>
    <p>TODO: SEARCH RESULTS</p>
    <p>Page: ${page} / 100</p>
     </body></html>`)
  } else {
    res.send('<h1>Invalid search term</h1>')
  }
}
module.exports = {
  getProductByQuery
}
