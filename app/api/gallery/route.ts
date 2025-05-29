import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const dir = path.join(process.cwd(), '_contents/gallery');

  try {
    debugger;
    const files = fs.readdirSync(dir);
    const items = files
      .filter((file) => file.endsWith('.json'))
      .map((filename) => {
        const filePath = path.join(dir, filename);
        const content = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(content);

        return {
          ...data,
          slug: filename.replace(/\.json$/, ''),
        };
      });

    return NextResponse.json(items);
  } catch (err) {
    console.error('Failed to load gallery:', err);
    return NextResponse.json({ error: 'Failed to load gallery' }, { status: 500 });
  }
}
