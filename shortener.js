fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer 0359a0cc1857f4f32d31c89fd0e0ecceea79b2d3',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F", "title": "Bitly API Documentation", "tags": [ "bitly", "api" ], "deeplinks": [ { "app_id": "com.bitly.app", "app_uri_path": "/store?id=123456", "install_url": "https://play.google.com/store/apps/details?id=com.bitly.app&hl=en_US", "install_type": "promote_install" } ] })
});




fetch('https://api-ssl.bitly.com/v4/bitlinks/bit.ly/12a4b6c', {
    method: "GET",
    headers: {
        'Authorization': 'Bearer 0359a0cc1857f4f32d31c89fd0e0ecceea79b2d3'
    }
})
.then(response => response.json())
.then(json => console.log(json))
.catch(err => console.log('Request Failed', err));


