import { Inngest } from "inngest";

export const inngest = new Inngest({ id: "careerly", name: "Careerly",
    credentials:{
        gemini:{
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
});
