import { GoogleGenerativeAI } from '@google/generative-ai';

// You'll need to set your API key here or via environment variable
const API_KEY = 'YOUR_GOOGLE_GEMINI_API_KEY'; // Replace with your actual API key

let genAI: GoogleGenerativeAI | null = null;

// Initialize the AI client
function initializeAI() {
  if (!genAI && API_KEY && API_KEY !== 'YOUR_GOOGLE_GEMINI_API_KEY') {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
}

export async function getExplanation(techName: string, context: string): Promise<string> {
  initializeAI();
  
  // Fallback if API key is not set
  if (!genAI || API_KEY === 'YOUR_GOOGLE_GEMINI_API_KEY') {
    return `**${techName}** is a ${context} technology that plays a crucial role in modern web applications. 
    
To get AI-powered explanations, please add your Google Gemini API key to geminiService.ts.

You can get a free API key at: https://makersuite.google.com/app/apikey

**Key Features:**
- Industry-standard technology
- Widely adopted in modern stacks
- Essential for ${context} architecture
- Integrates seamlessly with other tools

**Use Cases:**
- Building scalable applications
- Improving developer experience
- Enhancing performance and reliability`;
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `You are an expert software architect teaching modern web development.
    
Explain "${techName}" in the context of "${context}" in a clear, engaging way.

Requirements:
- Start with a concise 2-sentence overview
- Include 3-4 key features or benefits (use bullet points)
- Mention 2-3 real-world use cases
- Keep it under 200 words
- Use markdown formatting
- Be technically accurate but accessible to intermediate developers`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return `**${techName}** is a key technology in ${context}.

**Error:** Unable to fetch AI explanation. Please check:
- Your API key is correctly set in geminiService.ts
- You have internet connectivity
- Your API key has not exceeded its quota

**Fallback Info:**
${techName} is an important component in modern tech stacks. Visit the official documentation to learn more about its features, use cases, and best practices.`;
  }
}