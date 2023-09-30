function shortenUrl() {
  const longUrl = document.getElementById('longUrl').value;
  const customSlug = document.getElementById('customSlug').value;
  const accessToken = '47ca96c9161824368d379d767d2b8ef50b527902'; // Your Bitly access token

  if (!longUrl || !accessToken) {
    alert('Please enter a URL and access token.');
    return;
  }

  let apiUrl = 'https://api-ssl.bitly.com/v4/shorten';

  if (customSlug) {
    apiUrl += `?custom_bitlink=${encodeURIComponent(customSlug)}`;
  }

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
  .then(response => response.json())
  .then(data => {
    const shortUrl = data.link;
    document.getElementById('shortUrl').innerHTML = `<strong>Shortened URL:</strong> <a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
  })
  .catch(error => console.error('Error:', error));
}
