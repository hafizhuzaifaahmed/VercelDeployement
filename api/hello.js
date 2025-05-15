// api/hello.js
module.exports = function handler(req, res) {
  setTimeout(() => {
    res.status(200).send("Hello from Vercel! Auto-scaling triggered.");
  }, 1000);
};
