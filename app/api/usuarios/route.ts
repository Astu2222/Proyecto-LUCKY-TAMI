import { NextResponse } from "next/server";
import { productos } from "../productos/route";


export async function GET(request:Request) {
    return NextResponse.json(productos)
}

export async function POST(request:Request) {
    return NextResponse.json(productos)
}

export async function PUT(request:Request) {
    return NextResponse.json(productos)
}

export async function DELETE(request:Request) {
    return NextResponse.json(productos)
}