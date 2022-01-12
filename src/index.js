const express = require('express');

const server = express();


server.get('/', (request, response) => {
    console.log(request, response);
    response.send('ok');
});



server.listen(3000, () => {
    console.log('Listening on 3000');
});
