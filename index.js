const discord = require("discord.js-selfbot-v11")
const express = require('express');
const app = express();

const port = process.env.PORT || 5000

// const port = 5000

app.get('/', (req, res) => res.send('YAHALLO!!'));


app.listen(port, () => {
  console.log(`24/7 web server started!, Your app is listening a http://localhost:${port}`);
});const stevedore = require("fs")

const client = new discord.Client()

const config = require("./config.json")

const traits = stevedore.readdirSync("./traits/")
traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
})

client.login(process.env.token)