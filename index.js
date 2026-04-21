
const express = require("express");
const app = express();
app.use(express.json());

const TOKEN = "8675783964:AAFKlUsawF9f5gne6mrzdvRmwkIOt3g-tzg";

app.post("/", async (req, res) => {
    const msg = req.body.message;

    if (msg && msg.text === "/start") {
        const chatId = msg.chat.id;

        await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: "Bot funcionando!"
            })
        });
    }

    res.send("ok");
});

app.listen(process.env.PORT || 3000);
