import { NextResponse } from "next/server";

export async function GET (req, res) { 
      const head = new Headers(req.headers)
      console.log("head",head.get("content-type"))

   return NextResponse.json({
    msg:"hello this mu hammad "
   })
}