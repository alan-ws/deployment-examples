// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const envURL = new URL(
    `/v10/projects/${process.env.PROJECT_ID}/env`,
    "https://api.vercel.com"
  );

  try {
    console.log('attempting to add dynamic created ENV VARS')
    const urlRes = await fetch(envURL, {
      body: JSON.stringify({
        key: "NEXT_PUBLIC_DYNAMIC_KEY",
        value: Math.floor(Math.random() * 100 + 1),
        type: "encrypted",
        target: "preview",
      }),
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log(await urlRes.json());
    res.status(200).json(await urlRes.json());
  } catch (err) {
    console.error(err);
    res.status(200).json({ messages: `${err}` });
  }
}
