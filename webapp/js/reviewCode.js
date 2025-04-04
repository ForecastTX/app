import OpenAI from 'openai';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Ensure you've set this environment variable
});

// Function to send code to OpenAI for review
async function reviewCode(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',  // ✅ Updated model to 3.5
      messages: [
        {
          role: 'user',
          content: `Please review the following code for any issues and provide suggestions for improvement.\n\n${code}`,
        },
      ],
    });

    console.log('Code Review:', response.choices[0].message.content);
  } catch (error) {
    console.error('Error in code review:', error.response ? error.response.data : error.message);
  }
}

// Set the path to reviewCode.js
const filePath = path.resolve(__dirname, 'reviewCode.js');  // Adjust the path as needed
reviewCode(filePath);
