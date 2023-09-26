import express from "express";

const app = express();

app.get("/about", function (request, response) {
  response.send("<h1>О сайте</h1>");
});
app.get("/", function (request, response) {
  response.send("<h2>Привет Express!</h2>");
});
app.get("/contact", function (request, response) {
  response.send("<h1>Контакты</h1>");
});

export default app;
