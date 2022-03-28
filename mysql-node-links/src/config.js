/**
 * Reading Environment Variables
 */
import { config } from "dotenv";
config();

export default {
    database: {
        connectionLimit: 10,
        // host: process.env.DATABASE_HOST || "localhost",
        // user: process.env.DATABASE_USER || "root",
        // passwd: process.env.DATABASE_PASSWORD || "",
        // database: process.env.DATABASE_NAME || "dblinks",
        host: "localhost",
        user: "root",
        passwd: "",
        database: "dblinks"
    },
    port: process.env.PORT || 4000,
};