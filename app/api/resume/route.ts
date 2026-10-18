import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const resumeDir = path.join(process.cwd(), 'public');
    const primaryPath = path.join(resumeDir, 'resume', 'resume.pdf');
    const fallbackPath = path.join(resumeDir, 'resume.pdf');

    let targetFilePath = '';
    if (fs.existsSync(primaryPath)) {
      targetFilePath = primaryPath;
    } else if (fs.existsSync(fallbackPath)) {
      targetFilePath = fallbackPath;
    }

    if (!targetFilePath) {
      return new NextResponse('Resume PDF not found on server.', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    const fileBuffer = await fs.promises.readFile(targetFilePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Tirtha_Rudra_Shettigar_Resume.pdf"',
        'Content-Length': fileBuffer.byteLength.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600, must-revalidate',
      },
    });
  } catch (error) {
    console.error('Error serving resume PDF:', error);
    return new NextResponse('Internal server error loading resume PDF.', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }
}
