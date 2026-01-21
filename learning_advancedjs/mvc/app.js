const express = require("express");
const app = express();

const router = require("./routes");

app.use(express.json());   // 👈 MUST
app.use(router);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
