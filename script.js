function shortenUrl() {
  const longUrl = document.getElementById('longUrl').value;
  const accessToken = '47ca96c9161824368d379d767d2b8ef50b527902';

  if (!longUrl || !accessToken) {
    alert('Please enter a URL and access token.');
    return;
  }

  const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      long_url: longUrl
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const shortUrl = data.link;
    document.getElementById('shortUrl').innerHTML = `<strong>Shortened URL:</strong> <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  })
  .catch(error => {
    document.getElementById('shortUrl').innerHTML = `Error: ${error.message}`;
    console.error('Error:', error);
  });
}
