import { NextResponse } from 'next/server';
import businessData from '../../../data/business-info.json'; 

export async function POST(req: Request) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Missing Gemini API Key' }, { status: 500 });
  }

  try {
    const { messages } = await req.json();
    const lastUserMessage = messages[messages.length - 1].content;

    // 1. Prepare the Prompt
  // ... inside app/api/chat/route.ts

    const SYSTEM_INSTRUCTION = `
      You are a customer support agent for ${businessData.business_name}.
      KNOWLEDGE BASE: ${JSON.stringify(businessData)}
      
      RULES:
      1. Answer ONLY based on the knowledge base.
      2. If the answer is missing, say "Please contact support."
      3. Be concise and professional.
      
      FORMATTING RULES (VERY IMPORTANT):
      - NEVER write a list in a single paragraph.
      - ALWAYS use a vertical list format for products or multiple items.
      - Put every item on a new line starting with a hyphen (-).
      - Example format:
        - **Product Name**: $Price - Stock Status
        - **Product Name**: $Price - Stock Status
    `;

    // ... rest of the code stays the same
    const finalPrompt = `${SYSTEM_INSTRUCTION}\n\nUSER QUESTION: ${lastUserMessage}`;

    // CHANGE: Use 'gemini-flash-latest' which usually has the best free tier availability
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: finalPrompt }]
          }
        ]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Google API Error:', JSON.stringify(errorData, null, 2));
      return NextResponse.json({ error: 'AI Error', details: errorData }, { status: response.status });
    }

    const data = await response.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}