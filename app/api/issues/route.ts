import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { prisma } from '@/prisma/client';
import { schema } from '../../schema';

export async function POST(request : Request){
    const body= await request.json()
    const validation= schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json({error: validation.error.issues}, {status: 400});
    }

    const newissue=await prisma.issue.create({
        data: { 
            title: body.title,
            description: body.description,
        },
    });
    return NextResponse.json(newissue, {status: 201});
}