import  express  from "express"


const app = express();
const port=3000

app.use("/", (req, res) => {
    res.send("Le serveur fonctionne");
});

app.listen(3000, () => {
    console.log("Le serveur démarre sur le port 3000");
});
