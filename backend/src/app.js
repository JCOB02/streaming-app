import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import authRoutes from "./routes/auth-routes.js"

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())

app.use(morgan("dev"))

app.use((req, res, next) => {
  console.log("Request:", req.method, req.url);
  next();
});
app.get("/test", (req, res) => {
  res.json({ ok: true });
});




app.use("/auth", authRoutes)

export default app;