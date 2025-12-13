import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { SYSTEM_PROMPT } from "./systemPrompt";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { messages } = await request.json();

        if (!messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { error: "Mensajes no válidos" },
                { status: 400 }
            );
        }

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages,
            ],
            model: "openai/gpt-oss-120b",
            temperature: 0.7,
            max_tokens: 500,
        });

        const content = chatCompletion.choices[0]?.message?.content || "Lo siento, no pude procesar tu mensaje.";

        return NextResponse.json({ content });
    } catch (error) {
        console.error("Error en chat API:", error);
        return NextResponse.json(
            { error: "Error interno del servidor" },
            { status: 500 }
        );
    }
}
