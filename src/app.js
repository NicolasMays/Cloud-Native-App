const express = require('express');
let appInsights = require("applicationinsights");
appInsights.setup("InstrumentationKey=78d645ae-119e-4999-aff7-71a0bbb6cc48;IngestionEndpoint=https://eastus2-3.in.applicationinsights.azure.com/").start();
appInsights.start();
const app = express();
const port = 3000;



app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    
});
