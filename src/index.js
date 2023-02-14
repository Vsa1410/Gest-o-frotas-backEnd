const express = require("express");
const routes = require("./routes");

require("../config/Associations");
const cors = require('cors');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use(routes);

app.listen(3010)
