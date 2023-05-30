import { app } from './app'
import 'dotenv/config'

console.log(process.env.DATABASE_URL)
app.listen(3333, () => console.log("Server is running!"));
