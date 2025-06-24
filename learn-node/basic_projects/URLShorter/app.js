import crypto from "crypto";
import { readFile, writeFile } from "fs/promises";
import { createServer } from "http";
import path from "path";
import { URL } from "url";

const PORT = 5000;
const DATA_FILE = path.join("data", "links.json");

const loadLinks = async () => {
    try {
        const data = await readFile(DATA_FILE, 'utf-8');
        if (!data.trim()) {
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
};


const saveLinks = async (links) => {
    await writeFile(DATA_FILE, JSON.stringify(links, null, 2));
};

const server = createServer(async (req, res) => {
    if (req.method === "GET") {
        if (req.url === "/") {
            try {
                const data = await readFile(path.join("public", "index.html"));
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
                return;
            } catch {
                res.writeHead(404, { "Content-Type": "text/plain" });
                res.end("404: Page not found");
                return;
            }
        }

        // Redirect if shortCode is found
        const shortCode = req.url.slice(1);
        const links = await loadLinks();
        const originalUrl = links[shortCode];
        if (originalUrl) {
            res.writeHead(302, { Location: originalUrl });
            res.end();
            return;
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Short URL not found");
            return;
        }
    }

    if (req.method === "POST" && req.url === "/shorter") {
        const links = await loadLinks();

        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
            let parsed;
            try {
                parsed = JSON.parse(body);
            } catch {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid JSON");
                return;
            }

            const { url, shortCode } = parsed;
            if (!url) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("URL is required");
                return;
            }

            // Validate URL format
            try {
                new URL(url);
            } catch {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Invalid URL format");
                return;
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

            if (links[finalShortCode]) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Short code already exists. Please choose another.");
                return;
            }

            links[finalShortCode] = url;
            await saveLinks(links);

            const responseBody = JSON.stringify({ success: true, shortCode: finalShortCode });
            res.writeHead(200, {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(responseBody),
            });
            res.end(responseBody);
        });
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});
