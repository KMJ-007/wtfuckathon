import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function GET() {
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: "Generate a funny and absurd webpage content for a hackathon called WTFathon. Include a ridiculous project description, a nonsensical FAQ, and a bizarre call to action. Use HTML tags for structure.",
      max_tokens: 1000,
      temperature: 0.8,
    });

    const content = completion.data.choices[0].text;

    return NextResponse.json({ content });
  } catch (error) {
    console.error('Error generating content:', error);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}