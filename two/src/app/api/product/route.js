import { NextResponse } from "next/server";

export async function GET (req, res) { 
      const head = new Headers(req.headers)
    //   console.log("head",head.get("content-type"))

    const { searchParams } = new URL(req.url)
    console.log(searchParams)

   return NextResponse.json({
    msg:"hello this mu hammad "
   })
}
export async function POST (req){
    const body = await req.json()
    console.log(body)
    console.log("hi")
    return NextResponse.json({
        msg:"hello this mu hammad ",
        body:body
       })
}