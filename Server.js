import express from 'express';
import dbConnection from './Config/dbConnection.js';
import Auth from './Models/Authmodel.js';
import routes from './Routes/Authhrotes.js';
import dotenv from "dotenv";
import poroutes from './Routes/productroutes.js';
import cors from 'cors';
dotenv.config ();
const app = express()
app.use(express.json());

app.use(cors());
const port = process.env.Port || 5000
dbConnection();
Auth();
app.use("/api",routes)
app.use("/",poroutes)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})