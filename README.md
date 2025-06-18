# Zerocode Frontend Assignment – Vineet Pandey

This is a fully responsive AI chat assistant web app built with React, Vite, and TailwindCSS. It includes login authentication, a clean chat interface with bot interaction, and bonus features like voice input, chat export, and smart prompt suggestions.

---

## 🔧 Tech Stack

- React + Vite
- TailwindCSS with shadcn/ui components
- TypeScript
- Lucide Icons
- Custom Hooks: `useAuth`, `useChat`

---

## 🔐 Authentication

The login system is implemented using a custom `useAuth` hook that simulates authentication using local storage. Access to the chat interface is restricted unless the user is logged in.

### ✅ Test Credentials:

Email: test@example.com
Password: password


---

## 💬 Chat Functionality

- Chat interface with styled user/bot messages
- Bot replies with smart responses based on keyword detection
- Smooth scroll-to-bottom on new message
- Typing indicator animation while bot is "thinking"
- Responsive design with theme toggle

---

## 🎁 Bonus Features Implemented

### ✅ 1. Voice Input (🎤)
Users can speak messages instead of typing using the Web Speech API.

### ✅ 2. Export Chat (📤)
Users can download their chat history as a `.txt` file directly from the browser.

### ✅ 3. Prompt Buttons (💬)
Common prompts like "Tell me a joke" and "Summarize this conversation" are available for quick interaction.

---

## 📁 Folder Structure

src/
├── components/
│ ├── ChatInput.tsx
│ ├── ChatMessage.tsx
│ ├── VoiceInput.tsx
│ ├── ExportChat.tsx
│ └── PromptChips.tsx
├── hooks/
│ ├── useAuth.ts
│ └── useChat.ts
├── pages/
│ ├── Login.tsx
│ └── Chat.tsx
├── types/
│ └── chat.ts
├── App.tsx
└── main.tsx


---

## 🧪 How to Run Locally

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build


🌐 Live Demo
Vercel URL:
👉 https://https://zerocode-fe-assignment-delta.vercel.app/

📦 Deployment
This project is deployed using Vercel, which automatically builds from the GitHub repository.

Build Settings:
Build Command: npm run build

Output Directory: dist

🤖 Sample Bot Responses
Prompt	Bot Response
"Tell me a joke"	"Why don't programmers like nature? It has too many bugs."
"Summarize this conversation"	"You had a thoughtful conversation with your friendly AI assistant."
"What’s the weather?"	"It's always sunny in localhost 🌞"
"Who won the last IPL?"	"CSK won the last IPL. Dhoni still finishes things off in style!"

Built by Vineet Pandey
Frontend Developer

