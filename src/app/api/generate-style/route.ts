import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function GET() {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a creative Tailwind CSS class generator. Generate extremely funky, random, and absurd Tailwind classes for a webpage. Focus on creating dramatic visual changes."
        },
        {
          role: "user",
          content: "Generate extremely funky Tailwind classes for the body element. Include:\n1. A vibrant background gradient\n2. A contrasting text color\n3. An unusual font style\n4. At least one transform effect (rotate, skew, or scale)\n5. A dramatic animation\nBe bold and absurd! Return as a JSON object with keys: bgGradient, textColor, fontStyle, transform, animation."
        }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 1.0,
      max_tokens: 200,
    });
    const content = completion.choices[0]?.message?.content;
    console.log(content);
    if (!content) {
      throw new Error('No content generated');
    }

    const styles = JSON.parse(content);
    return NextResponse.json(styles);
  } catch (error) {
    console.error('Error generating style:', error);
    return NextResponse.json({ error: 'Failed to generate style' }, { status: 500 });
  }
}


