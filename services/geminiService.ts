import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const STORAGE_KEY = 'ai_nexus_custom_api_key';

const SYSTEM_INSTRUCTION = `
你是一位世界级的AI与机器学习导师，名字叫"智核助手"。
你的目标是用清晰、生动、且具有启发性的中文来解释复杂的AI概念。
当用户提问时：
1. 使用简单的类比（例如用烹饪比喻超参数调整）。
2. 如果涉及数学，请提供公式但也提供直观解释。
3. 鼓励用户思考。
4. 保持语气专业但友好，充满科技感。
请使用Markdown格式回答。
`;

export const setCustomApiKey = (key: string | null) => {
  if (key) {
    localStorage.setItem(STORAGE_KEY, key);
  } else {
    localStorage.removeItem(STORAGE_KEY);
  }
  // Reset session to force re-initialization with new key
  chatSession = null;
  genAI = null;
  initGemini();
};

export const getCustomApiKey = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY);
  }
  return null;
};

export const initGemini = () => {
  // Priority: Custom Key (LocalStorage) > Environment Variable
  const customKey = getCustomApiKey();
  const apiKey = customKey || process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key is missing! Please configure it in settings or environment variables.");
    return;
  }

  // If we already have a session, do nothing
  if (genAI && chatSession) {
    return;
  }
  
  try {
    genAI = new GoogleGenAI({ apiKey: apiKey });
    
    chatSession = genAI.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster interactive chat
      },
    });
    console.log("Gemini initialized successfully.");
  } catch (e) {
    console.error("Failed to initialize Gemini:", e);
    chatSession = null;
    genAI = null;
  }
};

export const sendMessageStream = async (message: string) => {
  if (!chatSession) {
    initGemini();
  }
  
  if (!chatSession) {
    throw new Error("Failed to initialize Gemini session. Please check your API Key configuration.");
  }

  try {
    const streamResult = await chatSession.sendMessageStream({ message });
    return streamResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Attempt to re-init on error (e.g. expired session or invalid key)
    chatSession = null;
    genAI = null;
    throw error;
  }
};