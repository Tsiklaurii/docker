import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello theree");
});

app.get("/validate", (req, res) => {
    const email = req.query.email;
    const isValid =
        typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    res.json({ email: email || "", isValid });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// http://localhost:8888/validate?email=test@gmail.com
// {"email":"test@gmail.com","isValid":true}

// http://localhost:8888/validate?email=hello
// {"email":"hello","isValid":false}