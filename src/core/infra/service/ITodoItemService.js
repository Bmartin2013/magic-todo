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


        const regex = /\d+\.\s.+?(?=\n|$)/g;
        const aiResponse = completion.choices[0].message.content;
        console.log("aiQuestion", aiQuestion, "aiResponse", aiResponse)

        const items = aiResponse.match(regex).map(punto => punto.slice(0, -1).trim());

        return items;
    } catch (error) {
        console.error("Error fetching or processing completion:", error);
    }
}