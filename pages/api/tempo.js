function tempo(request, response) {

  const date = new Date();

  response.json({
    date: dynamic.toDateString()
  })
}

export default tempo;