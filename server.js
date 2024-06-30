import routes from 

Dotsenv.conig();
const app = express()

app.use(express.json());
const port = process.env.Port || 5000
dbconnection();
Auth();

app.use( "/api",routes)

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
})

