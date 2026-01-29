# AI Customer Support Chatbot (V1)

A full-stack AI chatbot built with **Next.js**, **React**, and **Google Gemini AI**. 
It is designed to handle General FAQs, Product Inquiries, Account Support, and Billing questions for small businesses.

🌐 **Live Demo:** https://ai-faq-assistant-nu.vercel.app/
---
## 🚀 Features

- **AI-Powered Answers:** Uses Google's Gemini Flash model for fast, accurate responses.
- **Context-Aware:** Loaded with a custom JSON Knowledge Base (Products, FAQs, Policies).
- **Markdown Support:** Displays lists, bold text, and links cleanly in the chat UI.
- **Modern UI:** Responsive, card-style chat interface using Tailwind CSS.
- **Hallucination Control:** Strict system prompts prevent the bot from making up facts.
---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Next.js API Routes (Serverless)
- **AI Model:** Google Gemini 2.0 Flash / 1.5 Flash (via REST API)
- **Data Source:** Static JSON file (`data/business-info.json`)
- **Formatting:** `react-markdown`, `remark-gfm`
---

## 📂 Project Structure

```bash
my-support-bot/
├── app/
│   ├── api/chat/route.ts    # Backend Logic (The Brain & Prompt Engineering)
│   └── page.tsx             # Frontend UI (Chat Interface)
├── data/
│   └── business-info.json   # Knowledge Base (FAQs, Products, & Policies)
├── .env.local               # Environment Variables (API Keys)
└── README.md                # Documentation
---


## ⚙️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sushma-1706/AI-FAQ-Assistant.git
cd AI-FAQ-Assistant

```

### 2️⃣ Install dependencies
``` bash
npm install
# Install required markdown renderers
npm install react-markdown remark-gfm
```

### 3️⃣ Setup Environment Keys
Create a .env.local file in the root directory and add your Google Gemini API key:
```bash
GEMINI_API_KEY=your_google_api_key_here
```

### 4️⃣ Run the development server
``` bash
npm run dev
```
Then open:
`
http://localhost:3000
`
---
### ⚙️ How to Customize
**Adding New FAQs**

To add more questions (e.g., "Do you ship internationally?"), simply edit `data/business-info.json`. The AI reads this file dynamically.
**Example:**

```bash
"shipping": {
  "international": "Yes, we ship to over 50 countries worldwide.",
  "tracking": "You will receive a tracking link via email once shipped."
}
```
**Changing the AI Personality**

Edit `app/api/chat/route.ts` and modify the `SYSTEM_INSTRUCTION variable`. You can change the tone (friendly vs. formal) or formatting rules.

---

### 🛡️ Bot Capabilities
The bot is currently trained to answer the following categories based on data/business-info.json:

**1. General Platform Questions**

   - What is this platform?
   - How does it work?
   - Who is it for?
   - Mobile app availability.

**2. Account Management**
     
   - How to reset passwords.
   - Creating/Deleting accounts.
   - Data security.

**3. Billing & Subscriptions**
     
   - Pricing & Payment methods.
   - Refund policies.
   - Canceling subscriptions.
   - Hidden charges.

**4. Support**
     
   - Working hours.
   - Contact methods.
   - Giving feedback.

----
### 🧠 How It Works
1. The user enters a question.
2. The chatbot processes the query.
3. A response is generated and displayed instantly in the UI.
---
### 🌍 Deployment
This project can be easily deployed using Vercel:
1. Push your code to GitHub
2. Import the repository into Vercel
3. Deploy
---
### 👩‍💻 Author

Sushma Damacharla
`
GitHub: https://github.com/Sushma-1706
`

