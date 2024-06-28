import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "",
    dangerouslyAllowBrowser: true,
});


export const load = async (aiQuestion) => {
    try {
        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: aiQuestion }],
            model: "gpt-3.5-turbo",
        });

        const aiResponse = completion.choices[0].message.content;

        const regex = /\d+\.\s.+?(?=\n|$)/g;
        const items = aiResponse.match(regex);

        if (!items) {
            return [aiResponse.trim()];
        }

        // Clean the items
        const cleanedItems = items.map(item => item.trim());
        return cleanedItems;

    } catch (error) {
        console.error("Error fetching or processing completion:", error);
    }
};