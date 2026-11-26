const express = require("express");
const path = require("node:path");
const fs = require("node:fs");
const { Resend } = require("resend");

const app = express();

const PORT = Number(process.env.PORT || 3000);
const DIST_PATH = path.join(__dirname, "dist");

app.disable("x-powered-by");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value, maxLength = 1000) {
    return typeof value === "string" ?
        value.trim().slice(0, maxLength) :
        "";
}

app.use("/api/contact", express.json({ limit: "12kb" }));

// ============================================
// CONTACT FORM API - HOSTINGER + RESEND
// ============================================

app.post("/api/contact", async(req, res) => {
    try {
        const body = req.body || {};

        const name = clean(body.name, 120);
        const email = clean(body.email, 254);
        const phone = clean(body.phone, 40);
        const service = clean(body.service, 120);
        const genre = clean(body.genre, 120);
        const budget = clean(body.budget, 100);
        const description = clean(body.description, 6000);

        if (
            name.length < 2 ||
            !emailRegex.test(email) ||
            !service ||
            description.length < 20
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide your name, a valid email, a service, and at least 20 characters about your project.",
            });
        }

        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey || !toEmail || !fromEmail) {
            console.error("Missing email environment variables");

            return res.status(503).json({
                success: false,
                message: "Email service is not configured.",
            });
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: [toEmail],
            replyTo: email,
            subject: `New Wordsmith Squad Inquiry - ${service}`,
            text: [
                "NEW WORDSMITH SQUAD PROJECT INQUIRY",
                "",
                `Name: ${name}`,
                `Email: ${email}`,
                `Phone: ${phone || "Not provided"}`,
                "",
                `Service: ${service}`,
                `Genre: ${genre || "Not specified"}`,
                `Budget: ${budget || "Not specified"}`,
                "",
                "PROJECT DESCRIPTION:",
                description,
                "",
                "Submitted via wordsmithsquad.com",
            ].join("\n"),
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(502).json({
                success: false,
                message: "We couldn't send your inquiry. Please try again.",
            });
        }

        if (!data || !data.id) {
            return res.status(502).json({
                success: false,
                message: "Email delivery could not be confirmed.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Your inquiry has been submitted successfully.",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return res.status(500).json({
            success: false,
            message: "Unexpected email service error.",
        });
    }
});

// API HEALTH CHECK

app.get("/api/health", (_req, res) => {
    res.json({
        status: "ok",
        service: "Wordsmith Squad",
    });
});

// Don't return the React HTML page for unknown APIs.
app.use("/api", (_req, res) => {
    res.status(404).json({
        success: false,
        message: "API endpoint not found.",
    });
});

// ============================================
// SERVE THE EXISTING REACT WEBSITE
// ============================================

if (!fs.existsSync(path.join(DIST_PATH, "index.html"))) {
    console.error(
        "Missing dist/index.html. Run npm run build first."
    );
    process.exit(1);
}

app.use(express.static(DIST_PATH));

// React/HashRouter fallback
app.use((req, res) => {
    if (req.method !== "GET" && req.method !== "HEAD") {
        return res.status(405).end();
    }

    res.sendFile(path.join(DIST_PATH, "index.html"));
});

// Start Hostinger Node.js server
app.listen(PORT, "0.0.0.0", () => {
    console.log(
        `Wordsmith Squad server running on port ${PORT}`
    );
});