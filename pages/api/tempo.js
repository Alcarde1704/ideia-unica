async function tempo(request, response) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const dynamicDate = new Date();

  const kindResponse = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCdlJx-w37viXFNq__qZ7ARQ&order=date&maxResults=20&key=${apiKey}`);
  const kindResponseJson = await kindResponse.json();
  const kind = kindResponseJson.kind;

  response.json({
    date: dynamicDate.toDateString(),
    kind: kind
  })
}

export default tempo;