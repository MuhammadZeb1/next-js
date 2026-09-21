import connectDB from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
 try {
    await connectDB();
    return new NextResponse(JSON.stringify({ message: "MongoDB connected" }), {
      status: 200,
    });
 } catch (error) {
    return new NextResponse(JSON.stringify({ message: "MongoDB connection error", error: error.message }), {
      status: 500,
    }); 
 }
}