// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const deploymentURL = new URL(
    `/v13/deployments?teamId=${process.env.TEAM_ID}`,
    "https://api.vercel.com"
  );
  try {
    console.log("attempting to create a deployment");
    const depURL = await fetch(deploymentURL, {
      body: JSON.stringify({
        name: process.env.NAME,
        gitMetaData: {
          remoteUrl: "git@github.com:alan-ws/deployment-examples.git",
        },
      }),
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TOKEN}`,
        "Content-Type": "application/json",
      },
    });
    console.log(await depURL.json());
    res.status(200).json(await depURL.json());
  } catch (err) {
    console.error(err);
    res.status(200).json({ message: `${err}` });
  }
}
