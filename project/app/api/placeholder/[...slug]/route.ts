import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string[] } }
) {
  // Aguardando o params como um todo antes de acessar sua propriedade
  const resolvedParams = await params;
  const slugParams = resolvedParams.slug;
  
  const width = slugParams?.[0] || '150';
  const height = slugParams?.[1] || '150';
 
  return NextResponse.redirect(`https://via.placeholder.com/${width}x${height}`);
}