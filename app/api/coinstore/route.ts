
// app/api/coinstore/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const url = "https://api.coinstore.com/api/v2/public/config/spot/symbols";
    const apiKey = process.env.COINSTORE_API_KEY || "";
    const secretKey = process.env.COINSTORE_SECRET_KEY || "";

    const expires = Date.now();
    const expiresKey = Math.floor(expires / 30000).toString();

    // Tạo HMAC key
    const key = crypto
      .createHmac("sha256", secretKey)
      .update(expiresKey)
      .digest("hex");

    // Payload rỗng
    const payload = JSON.stringify({});
    const signature = crypto
      .createHmac("sha256", Buffer.from(key, "utf8"))
      .update(payload)
      .digest("hex");

    const headers = {
      "X-CS-APIKEY": apiKey,
      "X-CS-SIGN": signature,
      "X-CS-EXPIRES": expires.toString(),
      "exch-language": "en_US",
      "Content-Type": "application/json",
      Accept: "*/*",
    };

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: payload,
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err: any) {
    console.error("Coinstore API error:", err);
    res.status(500).json({ error: err.message });
  }
}
