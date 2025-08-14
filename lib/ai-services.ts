import { GoogleGenerativeAI } from "@google/generative-ai";
import type { PersonalityTone } from "@/types/personas.types";

// Function to create persona context (prompt)
function createPersonaContext(
  persona: any,
  personalityTone: PersonalityTone = "default"
) {
  let context = `
    PERSONA IDENTITY:
    You are ${persona.basic_information.name} (${
    persona.basic_information.nickname
  }), 
    a ${persona.basic_information.occupation}.
    Age: ${persona.basic_information.age}, Gender: ${
    persona.basic_information.gender
  }
    Location: ${persona.basic_information.location.city}, ${
    persona.basic_information.location.country
  }
    Languages: ${persona.basic_information.languages.join(", ")}
    
    BIOGRAPHY:
    Short Bio: ${persona.biography.bio_short}
    Long Bio: ${persona.biography.bio_long}
    Career Journey: ${persona.biography.career_journey}
    Current Focus: ${persona.biography.current_focus}
    Achievements: ${persona.biography.achievements.join(", ")}
    Skills: Technical - ${persona.personality_and_style.skills.technical.join(
      ", "
    )}, 
            Soft - ${persona.personality_and_style.skills.soft.join(", ")}
    
    PERSONALITY & STYLE:
    Traits: ${persona.personality_and_style.traits.join(", ")}
    Tone of Voice: ${persona.personality_and_style.tone_of_voice}
    Likes: ${persona.personality_and_style.likes.join(", ")}
    Dislikes: ${persona.personality_and_style.dislikes.join(", ")}
    Values: ${persona.personality_and_style.values.join(", ")}
    Goals: Short Term - ${persona.personality_and_style.goals.short_term.join(
      ", "
    )}
           Long Term - ${persona.personality_and_style.goals.long_term.join(
             ", "
           )}
    Catchphrases: ${persona.personality_and_style.catchphrases.join(" | ")}
    
    KNOWLEDGE BASE:
    Topics of Expertise: ${persona.knowledge_base.topics_of_expertise.join(
      ", "
    )}
    
    BEHAVIOR RULES:
    - Preferred length: ${persona.ai_persona_behavior.preferred_length}
    - Roleplay mode: ${persona.ai_persona_behavior.roleplay_mode}
    - Avoid topics: ${persona.ai_persona_behavior.do_not_respond_topics.join(
      ", "
    )}
    
    YOUR COMMUNICATION STYLE:
    - Be helpful, engaging, and knowledgeable about ${persona.knowledge_base.topics_of_expertise.join(
      ", "
    )}
    - Respond casually, like you're texting a friend.
    - Use real examples and mimic the tone found in the provided replies/comments.
    - Keep responses conversational and accessible
  `;

  if (personalityTone !== "default") {
    context += `\n\nSPECIAL TONE INSTRUCTIONS:`;

    switch (personalityTone) {
      case "funny":
        context += `
        - Be extra humorous and playful in your responses
        - Use more jokes, emojis, and light-hearted expressions
        - Don't take anything too seriously
        - Make the conversation fun and entertaining`;
        break;

      case "advice":
        context += `
        - Focus on giving practical, actionable advice
        - Be more mentorship-oriented and supportive
        - Share insights that might help the user
        - Be encouraging but realistic with your guidance`;
        break;

      case "educational":
        context += `
        - Be more explanatory and detailed in your responses
        - Focus on teaching concepts clearly and thoroughly
        - Use examples to illustrate points when relevant
        - Be patient and pedagogical in your approach`;
        break;
    }
  }

  return context.trim();
}

// Function to generate AI response
export async function generateAIResponse(
  message: string,
  activePersonas: any[],
  apiKey: string,
  temperature = 0.7,
  personalityTone: PersonalityTone = "default"
) {
  if (!apiKey) {
    throw new Error("API key is required");
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        maxOutputTokens: 200,
        temperature: temperature,
      },
    });

    if (activePersonas.length === 1) {
      const persona = activePersonas[0];
      const context = createPersonaContext(persona, personalityTone);
      const userInstruction = `
        TASK:
        Respond to this message: "${message}"
        RESPONSE GUIDELINES:
        - Respond as ${persona.name}, the ${persona.specialty} specialist
        - Keep your response to 3-4 lines
        - Stay helpful and engaging
        - Use your expertise in ${persona.specialty} when relevant`;
      const prompt = context + userInstruction;
      const result = await model.generateContent(prompt);
      return result.response.text();
    } else {
      const responses: Record<string, string> = {};
      for (const persona of activePersonas) {
        const context = createPersonaContext(persona, personalityTone);
        const userInstruction = `
          TASK:
          Respond to this message: "${message}"
          RESPONSE GUIDELINES:
          - Respond as ${persona.name}, the ${persona.specialty} specialist
          - Keep your response to 3-4 lines
          - Stay helpful and engaging`;
        const prompt = context + userInstruction;
        const result = await model.generateContent(prompt);
        responses[persona.name] = result.response.text();
      }
      return responses;
    }
  } catch (error) {
    console.error("Error generating AI response:", error);
    throw error;
  }
}
