import { defineConfig, type Config } from "drizzle-kit";



export default defineConfig({
    schema: "./app/utils/schema.ts",
    out: "./drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
});