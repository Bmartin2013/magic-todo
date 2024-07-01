import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
});


export const load = async (prompt) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        return completion.choices[0].message.content;


    } catch (error) {
        console.error("Error fetching or processing completion:", error);
    }
};