// /:unit1-to-:unit2/:temp1

const convertTemp = (req, res) => {
  console.log(req.params)

  const u1 = req.params.unit1.toUpperCase()
  const u2 = req.params.unit2.toUpperCase()
  const t1 = parseInt(req.params.temp1)
  console.log(u1, u2, t1)
  let t2
  if (u1 === u2) {
    t2 = t1
  } else if (u1 === 'C') {
    t2 = (t1 * 9) / 5 + 32
  } else if (u1 === 'F') {
    t2 = ((t1 - 32) * 5) / 9
  }

  res.send(
    `<html><body>${t1.toFixed(1)} ${u1} = ${t2.toFixed(1)} ${u2}</body></html>`
  )
}

module.exports = {
  convertTemp
}
