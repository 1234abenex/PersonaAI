# 🤖 FFP CHAT - Free Forever Persona Chat

![Screenshot](https://ffpchat.vercel.app/og-image.png)

[🎥 Youtube - FFP CHAT - Free Forever Chat](https://youtu.be/uk6DQyuySUY)

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

> A privacy-first AI chatbot that lets you chat with different personas using your own Gemini API key. Experience conversations with tech educators, entrepreneurs, and industry experts - all while keeping your data completely local.

## 🎉 Features

### 🎭 **Persona-Based Conversations**

- **Pre-built Personas**: Chat with tech educators, entrepreneurs, developers, and industry experts
- **Category Filtering**: Easily find personas by expertise (Web Dev, AI, DevOps, etc.)
- **Smart Search**: Find personas by name or skills
- **Tone Selection**: Choose from Default, Funny, Advice, or Educational conversation styles

### 🔒 **Privacy-First Design**

- **No Database**: All data stays on your device
- **Local Storage**: Chat history saved locally in your browser
- **Your API Key**: Use your own Gemini API key for complete control
- **No Tracking**: Zero data collection or external tracking

### 💬 **Advanced Chat Features**

- **Conversation Context**: AI remembers previous messages for natural flow
- **Image Support (WIP)**: Upload and discuss images in your conversations
- **Message Reactions**: Like/dislike responses for better interaction
- **Copy & Regenerate**: Copy responses or regenerate better answers
- **Chat History**: Access all your previous conversations

### 📱 **Modern User Experience**

- **Fully Responsive**: Perfect experience on desktop, tablet, and mobile
- **Dark Theme**: Easy on the eyes with a sleek dark interface
- **Real-time Feedback**: Loading states, toast notifications, and smooth animations
- **Keyboard Shortcuts**: Press Enter to send, Shift+Enter for new lines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed on your system
- A Google Gemini API key ([Get it free here](https://ai.google.dev/))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BCAPATHSHALA/PersonaAI
   cd PersonaAI
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

   **Note**: you can also run `npm install` or `yarn install` to install the app but first remove the `pnpm-local.yaml` file.

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 How to Use

### Step 1: Select Your Persona

1. Browse through 2 available personas (will be expanded in the future)
2. Filter by category (Web Dev, AI, DevOps, etc.)
3. Search by name or expertise
4. Click on your preferred persona

### Step 2: Choose Conversation Tone

- **Default**: Professional and informative
- **Funny**: Light-hearted with humor
- **Advice**: Mentoring and guidance-focused
- **Educational**: Detailed explanations and learning

### Step 3: Enter Your API Key

1. Get your free Gemini API key from [Google AI Studio](https://ai.google.dev/)
2. Enter the key in the secure input field
3. Your key is stored locally and never sent to our servers

### Step 4: Start Chatting!

- Use conversation starters or type your own message
- Upload images for visual discussions (**coming soon**)
- React to responses with like/dislike
- Regenerate responses if needed

## 🏗️ Project Structure

```bash
PersonaAI/
├── app/                   # Next.js app directory
│   ├── api/chat/          # Chat API endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/                # Reusable UI components
│   ├── chat-interface.tsx # Main chat interface
│   ├── persona-setup.tsx  # Persona selection
│   └── ...                # Other components
├── hooks/                 # Custom hooks
│   ├── redux.ts           # Redux hooks
│   ├── use-mobile.ts      # Mobile detection hook
│   └── use-toast.ts       # Toast notification hook
├── lib/                   # Utilities and configurations
│   ├── store/             # Redux store and slices
│   ├── services/          # API services
│   ├── data/              # Static data (personas)
│   └── utils/             # Utility functions
├── types/                 # TypeScript type definitions
├── public/                # Static assets
├── .gitignore             # Ignored files
├── components.json        # Shadcn/ui component config
├── next-env.d.ts          # TypeScript type definitions
├── package.json           # Project metadata
├── pnpm-lock.yaml         # Pnpm lock file (if exists for Pnpm)
├── postcss.config.js      # PostCSS configuration
├── README.md              # Project documentation
└── tsconfig.json          # TypeScript configuration

```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS + shadcn/ui components
- **State Management**: Redux Toolkit with localStorage persistence
- **AI Integration**: Google Gemini API
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 🎨 Design Philosophy

### Color Palette

- **Primary**: Orange (#ef6a36) - Energy and creativity
- **Background**: Dark theme for reduced eye strain
- **Accents**: Subtle grays and whites for contrast
- **Interactive**: Hover states and smooth transitions

### Typography

- **Headings**: Clean, modern sans-serif
- **Body**: Readable font with proper line spacing
- **Code**: Monospace for technical content

## 🔧 Configuration

### Environment Variables

No environment variables needed! The app uses your locally stored API key.

### Customization

- **Add New Personas**: Edit `lib/data/personas.ts`
- **Modify Themes**: Update Tailwind classes in components
- **Change Tones**: Modify tone definitions in persona setup

## 📊 Performance Features

- **Code Splitting**: Lazy loading for optimal performance
- **Memoization**: React.useMemo for expensive computations
- **Optimized Images**: Next.js Image component
- **Bundle Analysis**: Built-in optimization

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Manoj Kumar**

- GitHub: [@bcapathshla](https://github.com/bcapathshla)
- Project: [FFP CHAT](https://github.com/BCAPATHSHALA/PersonaAI)

## 🙏 Acknowledgments

- **Google Gemini**: For providing the AI capabilities
- **Vercel**: For hosting and deployment platform
- **shadcn/ui**: For beautiful UI components
- **Next.js Team**: For the amazing framework

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/BCAPATHSHALA/PersonaAI/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

<div align="center">
  <p>Made with ❤️ by <a href="https://www.linkedin.com/in/manojofficialmj/">Manoj Kumar</a></p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
