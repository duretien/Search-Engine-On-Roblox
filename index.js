const express = require("express");
const app = express();
app.use(express.json());

const documents = [
    {
        id: 1,
        title: "Gravity",
        description: "A force that pulls objects toward each other.",
        tags: ["physics", "science"]
    },
    {
        id: 2,
        title: "Velocity",
        description: "Speed in a given direction.",
        tags: ["physics", "motion"]
    }
];

app.get("/", (req, res) => {
    res.json({ status: "API is running" });
});

app.get("/search", (req, res) => {
    const q = (req.query.q || "").toLowerCase();
    const results = documents.filter(doc =>
        doc.title.toLowerCase().includes(q) ||
        doc.description.toLowerCase().includes(q) ||
        doc.tags.some(tag => tag.toLowerCase().includes(q))
    );
    res.json({ results });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API running on port " + port));
