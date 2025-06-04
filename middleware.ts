import { NextRequest, NextResponse } from "next/server";


const blockedPaths = [".cgi", ".cfm", ".jsp", ".action", ".do", ".php", ".xsl", ".txt"];

export function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
  
    // Vérifie si l'URL contient une extension suspecte
    if (blockedPaths.some(ext => path.includes(ext))) {
      console.log(`🚫 Requête bloquée : ${req.method} ${path}`);
      return new NextResponse("403 Forbidden", { status: 403 });
    }
  
    console.log(`✅ Requête autorisée : ${req.method} ${path}`);
    return NextResponse.next();
  }