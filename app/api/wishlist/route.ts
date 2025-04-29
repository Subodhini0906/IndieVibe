import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("BoutiqueDb");
    const wishlist = db.collection("wishlist");

    const result = await wishlist.insertOne(body);

    return NextResponse.json({
      success: true,
      insertedId: result.insertedId,
    });
  } catch (err) {
    console.error("Insert failed:", err);
    return NextResponse.json(
      { success: false, error: "Insert failed" },
      { status: 500 }
    );
  }
}
