import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ time: new Date().toLocaleString() });
}
// wgdh88ZSgBZDOXFc
// mongodb+srv://merncms:<Huy091230>@cluster0.fifke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
