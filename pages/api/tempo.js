function tempo(request, response) {

  const date = new Date();

  response.json({
    date: date.toDateString()
  })
}