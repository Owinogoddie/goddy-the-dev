import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-dark.css";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const welcomeMessage =
    "Hello! I'm Godfrey AI, an assistant impersonating Godfrey Owino. How can I help you today? Feel free to ask me anything about Godfrey's skills, projects, or if you'd like to book an appointment.";

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      streamWelcomeMessage();
    } else {
      setMessages([]);
    }
  }, [isOpen]);

  const streamWelcomeMessage = async () => {
    const chunkSize = 5; // Increase this number to speed up the animation
    for (let i = 0; i <= welcomeMessage.length; i += chunkSize) {
      await new Promise((resolve) => setTimeout(resolve, 1)); // Reduced delay
      setMessages([{ role: "assistant", content: welcomeMessage.slice(0, i) }]);
    }
    // Ensure the full message is displayed at the end
    setMessages([{ role: "assistant", content: welcomeMessage }]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        className={`fixed   ${
          isOpen ? "bottom-4" : "bottom-12 md:bottom-4"
        } right-[2px] bg-slate-200 text-primary-foreground p-4 rounded-full shadow-lg z-[999998]`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
          transition: { repeat: Infinity, duration: 1 },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 md:bottom-20 right-4 z-[999999]"
          >
            <div className="bg-background rounded-lg shadow-xl flex flex-col w-full max-w-lg h-[550px] md:h-[580px] mx-4">
              <div className="bg-gray-300 text-primary-foreground p-4 rounded-t-lg">
                <h2 className="text-xl text-center font-bold">
                  Chat with Godfrey AI
                </h2>
              </div>
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 markdown-body"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${
                      message.role === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="text-center">
                    <motion.div
                      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                    <p className="mt-2 text-sm text-gray-500">Thinking...</p>
                  </div>
                )}
                {error && (
                  <div className="text-center text-red-500">{error}</div>
                )}
              </div>
              <form
                onSubmit={handleSubmit}
                className="p-4 border-t border-border"
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 border border-input rounded-l-lg p-2 focus:outline-none focus:ring-0 focus:ring-ring-0 bg-background text-foreground"
                    placeholder="Type your message..."
                  />
                  <button
                    type="submit"
                    className="bg-primary text-primary-foreground p-2 rounded-r-lg"
                    disabled={isLoading}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
