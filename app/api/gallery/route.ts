// app/api/gallery/route.ts

import { NextResponse } from 'next/server';
import { loadJsonContent } from '../../lib/loadJsonContent';

export async function GET() {
  try {
    const items = loadJsonContent('_contents/gallery');
    return NextResponse.json(items);
  } catch (err) {
    console.error('Failed to load gallery:', err);
    return NextResponse.json({ error: 'Failed to load content' }, { status: 500 });
  }
}
