const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Start on http://localhost:${PORT}`);
});

app.get("/tugas", (req, res) => {
  res.json([
    {
      tugas: "Membuat proposal aplikasi",
      matkul: "Pengembangan aplikasi Web",
      tanggal: "12 September 2022",
    },
    {
      tugas: "Membuat Media Ajar untuk kelas 5 SD",
      matkul: "Pengembangan aplikasi Web",
      tanggal: "24 Oktober 2022",
    },
  ]);
});

app.get("/tugas/:id", (req, res) => {
  res.json({
    tugas: "Membuat Media Ajar untuk kelas 5 SD",
    matkul: "Pengembangan aplikasi Web",
    tanggal: "24 Oktober 2022",
  });
});

app.post("/tugas", (req, res) => {
  res.json({
    tugas: "Membuat Media Ajar untuk kelas 5 SD",
    matkul: "Pengembangan aplikasi Web",
    tanggal: "24 Oktober 2022",
  });
});

app.delete("/tugas/:id", (req, res) => {
  res.json({
    tugas: "Membuat Media Ajar untuk kelas 5 SD",
    matkul: "Pengembangan aplikasi Web",
    tanggal: "24 Oktober 2022",
  });
});
