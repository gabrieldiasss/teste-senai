import { app } from './app'
import 'dotenv/config'

console.log(process.env.DB_URI)
app.listen(3333, () => console.log("Server is running!"));
