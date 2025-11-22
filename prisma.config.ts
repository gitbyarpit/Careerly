import "dotenv/config"
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: "postgresql://careeerly:npg_WYi3J0tevjEI@ep-proud-leaf-a8zyu6ic-pooler.eastus2.azure.neon.tech/careeerlyai?sslmode=require&channel_binding=require",
  },
});
