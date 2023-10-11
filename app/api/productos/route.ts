import { NextResponse } from "next/server";

export const productos = [
    {
        id:"1",
        nombre: "Lucky Auris",
        precio: "$150"
    },
    {
        id:"2",
        nombre: "Tami Foto Astronauta",
        precio: "$150"
    }
]

export async function GET(request:Request) {
    return NextResponse.json(productos)
}

export async function POST(request:Request) {

    const nuevoProducto = await request.json();
    console.log(nuevoProducto)

    productos.push(nuevoProducto)

    return NextResponse.json(productos)
}