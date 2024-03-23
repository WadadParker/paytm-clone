import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "wadad@gmail.com",
            name: "Wadad Parker"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}