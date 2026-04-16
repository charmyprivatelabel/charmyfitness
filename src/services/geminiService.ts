
import { GoogleGenAI } from "@google/genai";

export const generateBrandPoem = async (topic: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Escreva um parágrafo curto e poético sobre a essência da lingerie feminina focada no tema: ${topic}. Use um tom elegante, sofisticado e empoderador, similar à marca Charmy Lingerie. Responda em Português do Brasil.`,
    config: {
      temperature: 0.8,
      topP: 0.9,
    },
  });
  return response.text;
};
