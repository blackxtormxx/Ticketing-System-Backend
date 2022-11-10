import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = Express();

app.use(bodyParser.json( {limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send(
        "Hello from Hexclan"
    )
});

export default app;