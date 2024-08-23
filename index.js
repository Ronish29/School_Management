const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/school');
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api',routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});