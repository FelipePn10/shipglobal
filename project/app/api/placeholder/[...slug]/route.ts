import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { slug: string[] } }) {
  const width = params.slug?.[0] || '150';
  const height = params.slug?.[1] || '150';
  
  return NextResponse.redirect(`https://via.placeholder.com/${width}x${height}`);
}