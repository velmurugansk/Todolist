const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const routes = require('./router/apirouter');
const app = express();
const PORT = process.env.PORT || 6000

app.use(express.json());
app.use(cors());
app.use(routes);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    app.listen(PORT, () => console.log(`Sever Running On ${PORT}`));
}).catch((error) => console.log(error));
