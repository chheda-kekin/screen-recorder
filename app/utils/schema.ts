import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const instruments = pgTable("instruments", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 })
});