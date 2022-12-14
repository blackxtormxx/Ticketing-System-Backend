import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import busRouteRouter from "../routes/busRoute.routes.js"
import busTypeRouter from "../routes/busType.routes.js"
import userRoutes from "../routes/User.routes.js"
import ticketRoutes from "../routes/ticket.routes.js"

const app = Express();

app.use(bodyParser.json( {limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded( {limit: '30mb', extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send(
        "Hello from Hexclan"
    )
});

app.use('/api/v1/busRoutes', busRouteRouter);
app.use('/api/v1/busTypes', busTypeRouter);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/ticket', ticketRoutes);



export default app;