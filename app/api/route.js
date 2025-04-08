import { NextResponse } from 'next/server';

export async function POST(request) {
  const { text } = await request.json();

  if (!text) {
    return NextResponse.json({ error: "Text is required" }, { status: 400 });
  }

  try {
    console.log("Sending request to Google Translate API...");
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2/detect?key=${process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ q: text }),
      }
    );

    console.log("Response status:", response.status);
    const data = await response.json();
    console.log("Response data:", data);

    const detectedLanguage = data.data.detections[0][0].language;
    return NextResponse.json({ detectedLanguage });
  } catch (error) {
    console.error("Error detecting language:", error);
    return NextResponse.json({ error: "Failed to detect language" }, { status: 500 });
  }
}