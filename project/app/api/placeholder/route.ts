import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const width = searchParams.get('width') || '150';
  const height = searchParams.get('height') || '150';
  return NextResponse.redirect(`https://via.placeholder.com/${width}x${height}`);
}