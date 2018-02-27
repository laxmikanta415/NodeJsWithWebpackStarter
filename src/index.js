import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.route("/").get((req, res) => {
  res.status(201).json({ ok: true });
});

export default app;
