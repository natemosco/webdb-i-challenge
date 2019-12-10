const server = require("./server.js");

const PORT = process.env.PORT || 3459;

server.listen(PORT, () => {
  console.log(`\n\t\t Welcome Back Sir,\n\t\t*Listening on port ${PORT}...`);
});
