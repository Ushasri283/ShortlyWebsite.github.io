// let myForm = document.getElementById("myForm");
// let inputEl = document.getElementById("long-url");
// let listContainer = document.getElementById("url-list");
// let clickButton = document.getElementById("clickButton");
// let listItem = document.getElementById("list-item");

// clickButton.addEventListener("click", function() {
//     clickButton.textContent = "Clicked!";
// })

// function generateShortUrl(fullUrl) {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let shortenUrl = "";
//     for(let i =0; i< 5; i++) {
//         shortenUrl += characters.charAt(Math.float(Math.random() * characters.length));
//     }
//     return "http://example.com/" + shortenUrl;
// }

// myForm.addEventListener("submit", function(event) {
//     event.preventDefault();
//     let fullUrl = inputEl.value.trim();
//     let shortUrl = generateShortUrl(fullUrl);

//     listItem.textContent = shortUrl;
//     inputEl.value = "";

// });

function handleShortUrlClick()
{
    window.alert('Hi Usha');
}




// Function to shorten a URL using the Bitly API
// async function shortenUrl(longUrl, accessToken) {
//     const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
   
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ long_url: longUrl }),
//     });
  
//     if (!response.ok) {
//       throw new Error(`Failed to shorten URL: ${response.statusText}`);
//     }
  
//     const data = await response.json();
//     return data.link;
//   }
  
//   // Example usage
//   const longUrl = 'https://www.example.com/some/long/url';
//   const accessToken = 'YOUR_BITLY_ACCESS_TOKEN'; // Replace with your Bitly access token
//   shortenUrl(longUrl, accessToken)
//     .then(shortUrl => {
//       console.log('Short URL:', shortUrl);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//     });
  