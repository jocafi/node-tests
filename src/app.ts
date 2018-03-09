import { ClassB } from "./class-b";
import { ClassA } from "./class-a";
import dotenv from "dotenv";

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.firebase" });

console.log("DB_NAME: " + process.env.DB_NAME);
// export default app;

const classa = new ClassA("Maria");

const myB = new ClassB("Robert", classa);

myB.show();