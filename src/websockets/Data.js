import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";


const useGenerativeAI = () => {
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const genrate = async (prompt) => {
        try {
            setLoading(true);
            const apiKey = import.meta.env.VITE_API_KEY;

            
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const newPrompt = `Generate only the HTML and CSS and JS nad use tailwand code with in one file for the following website description: ${prompt}. Do not include explanations or comments.`

            const results = await model.generateContent(newPrompt);
            setResult(results.response.text().replace(/```html/g, "").replace(/```/g, ""));
        } catch (error) {
            console.log(error);
            
            setLoading(false);
        }
        finally {
            setLoading(false);
        }
    };

    return { result, genrate, loading };
};

export default useGenerativeAI;