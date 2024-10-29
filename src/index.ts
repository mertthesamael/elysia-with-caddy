import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "🦊 | Hello Elysia")
  .get("/verify-domain", () => {
    
    // Set your domain rules and return 200
    return "ok"
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);