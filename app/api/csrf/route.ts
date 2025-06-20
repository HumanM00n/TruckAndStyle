import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET() {
  const csrfToken = crypto.randomBytes(32).toString("hex");

  const response = NextResponse.json({ csrfToken });

    response.cookies.set("csrfToken", csrfToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return response;
}
