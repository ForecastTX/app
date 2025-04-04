const { Configuration, OpenAIApi } = require("openai");
const fs = require("fs");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,  // Ensure you've set this environment variable
});

const openai = new OpenAIApi(configuration);

// Function to send code to OpenAI for review
async function reviewCode(filePath) {
  const code = fs.readFileSync(filePath, "utf8");

  try {
    const response = await openai.createCompletion({
      model: "gpt-4", // or whichever model you'd like to use
      prompt: `Please review the following code for any issues and provide suggestions for improvement.\n\n${code}`,
      max_tokens: 500,
    });

    console.log("Code Review:", response.data.choices[0].text);
  } catch (error) {
    console.error("Error in code review:", error.response ? error.response.data : error.message);
  }
}

const filePath = "path/to/your/codefile.js";  // Replace with the actual file you want to review
reviewCode(filePath);
