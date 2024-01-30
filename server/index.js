import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mangi-client.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/", (req, res) => {
    res.send("Le serveur fonctionne");
});

app.listen(port, () => {
    console.log(`Le serveur démarre sur le port ${port}`);
});
