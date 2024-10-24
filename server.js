const os = require('os');
const express = require('express');
const app = express();
const redis = require('redis');
const redisClient = redis.createClient({
    host: 'redis',
    port: 6379
});

app.get('/', function (req, res) {
    redisClient.get('numVisits', function (err, numVisits) {
        numVisitsToDisplay = parseInt(numVisits) + 1;
        if (isNaN(numVisitsToDisplay)) {
            numVisitsToDisplay = 1;
        }
        const hostname = os.hostname();
        hostname.charAt(0).toUpperCase();
        res.send(`<span style="font-size: 4em;">Hostname: ${hostname}
       <h1>Number of visits is: ${numVisitsToDisplay}</h1>
       </span>
       `)
        numVisits++;
        redisClient.set('numVisits', numVisits);
    });
});

app.listen(5000, function () {
    console.log('Web application is listening on port 5000');
});