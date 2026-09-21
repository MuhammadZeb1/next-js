import { NextResponse } from "next/server"

export const GET = async (req,context )=>{

     console.log("contaxr ", context)
    const ali= await context.params
    console.log(ali.id)

    return NextResponse.json({
        msg: "hello this is the product with id"
    })
}