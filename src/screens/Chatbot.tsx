import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.css'

// ── Types ────────────────────────────────────────────────────
interface Message {
  id: number
  from: 'user' | 'bot'
  text: string
  time: string
}

// ── Smart travel FAQ bot ─────────────────────────────────────
const BOT_NAME = 'FabXP Guide'
const GREETING =
  "Hi there! 👋 I'm your FabXP travel guide. Ask me anything about our tours, packages, destinations, or booking process!"

const FAQ: { patterns: string[]; answer: string }[] = [
  {
    patterns: ['hello', 'hi', 'hey', 'hiya', 'greet'],
    answer: "Hello! 😊 Welcome to FabXP. I'm here to help you plan your dream journey. What destination are you curious about?",
  },
  {
    patterns: ['japan', 'tokyo', 'cherry blossom', 'sakura'],
    answer:
      '🌸 Japan is one of our most popular destinations! Our **Japan Spring** package (7 days / 6 nights) starts from **$1,200 / person**. It covers Tokyo, Kyoto, and Mount Fuji during cherry blossom season. Want to know more?',
  },
  {
    patterns: ['morocco', 'desert', 'sahara', 'marrakech'],
    answer:
      '🏜️ Morocco is magical! Our **Morocco Desert Journey** (8 days / 7 nights) starts from **$1,800 / person** — covering Marrakech, the Sahara dunes, and traditional riads. Shall I share itinerary details?',
  },
  {
    patterns: ['italy', 'rome', 'venice', 'amalfi'],
    answer:
      '🍕 Bella Italia! Our **Italy Classic** package (7 days / 6 nights) is priced from **$1,400 / person** — with Rome, Florence, and the Amalfi Coast. Would you like to explore this further?',
  },
  {
    patterns: ['africa', 'safari', 'kenya', 'savanna'],
    answer:
      '🦁 Africa is breathtaking! Our **Africa Experience** (8 days / 7 nights) starts from **$2,200 / person** — featuring safari drives, wildlife encounters, and luxury lodge stays.',
  },
  {
    patterns: ['switzerland', 'alps', 'zurich', 'swiss'],
    answer:
      '🏔️ Switzerland is stunning year-round! Snow-capped Alps, crystal-clear lakes, and charming villages. Get in touch with our team for a custom Swiss itinerary tailored to you.',
  },
  {
    patterns: ['paris', 'france', 'eiffel'],
    answer:
      '🗼 Paris — the city of love! From the Eiffel Tower to Montmartre and world-class cuisine, it\'s unforgettable. We craft bespoke Paris experiences — contact us to start planning!',
  },
  {
    patterns: ['price', 'cost', 'how much', 'rate', 'pricing', 'budget'],
    answer:
      '💰 Our packages start from as low as **$1,200 / person**. Pricing depends on the destination, duration, and accommodation tier. Would you like a quote for a specific trip?',
  },
  {
    patterns: ['cancel', 'refund', 'cancellation', 'policy'],
    answer:
      '📋 We offer **full refunds** for cancellations made 30+ days before departure. Within 30 days, a partial refund applies. Full details are shared at the time of booking.',
  },
  {
    patterns: ['book', 'booking', 'reserve', 'how to book'],
    answer:
      '📅 Booking is simple! Click the **"Book a Trip"** button at the top, or contact our travel specialists directly. We\'ll craft your personalised itinerary within 24 hours.',
  },
  {
    patterns: ['solo', 'alone', 'single traveler'],
    answer:
      '🎒 Absolutely — we specialise in solo journeys! We match solo travellers with like-minded groups or craft private experiences based on your pace and preferences.',
  },
  {
    patterns: ['group', 'family', 'corporate', 'team'],
    answer:
      '👨‍👩‍👧‍👦 We love group trips! From family holidays to corporate retreats, we handle logistics, activities, and accommodations for groups of all sizes.',
  },
  {
    patterns: ['customise', 'custom', 'personalise', 'tailor', 'bespoke'],
    answer:
      '✨ Every itinerary we create is 100% custom! Our specialists work one-on-one with you to match your pace, interests, and budget — nothing is off-the-shelf.',
  },
  {
    patterns: ['contact', 'email', 'phone', 'reach', 'talk', 'speak'],
    answer:
      '📞 You can reach our team via the **Contact** section at the bottom of this page, or tap below to connect on WhatsApp. We typically respond within an hour!',
  },
  {
    patterns: ['review', 'rating', 'testimonial', 'feedback'],
    answer:
      '⭐ We\'re proud of our **4.9-star rating** across 541,000+ reviews! Our travellers\' stories speak for themselves — check out the Testimonials section on this page.',
  },
  {
    patterns: ['thanks', 'thank you', 'thank', 'awesome', 'great', 'perfect'],
    answer:
      "You're welcome! 🙏 Is there anything else I can help you with? We'd love to make your next adventure truly unforgettable.",
  },
  {
    patterns: ['bye', 'goodbye', 'see you', 'ciao'],
    answer:
      'Safe travels! 🌍 Whenever you\'re ready to plan your next adventure, FabXP will be right here. Take care! ✈️',
  },
]

function getBotReply(input: string): string {
  const lower = input.toLowerCase()
  for (const faq of FAQ) {
    if (faq.patterns.some((p) => lower.includes(p))) {
      return faq.answer
    }
  }
  return "That's a great question! 🤔 Our travel experts would love to answer this personally. Please use the **Contact** section or click the Book a Trip button — we'll get back to you within an hour!"
}

function now(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

// ── Quick reply chips ────────────────────────────────────────
const QUICK_REPLIES = ['Japan tours', 'Morocco package', 'Pricing info', 'Book a trip', 'Cancel policy']

// ── Component ────────────────────────────────────────────────
const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, from: 'bot', text: GREETING, time: now() },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  // focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300)
      setUnread(0)
    }
  }, [open])

  const sendMessage = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return

    const userMsg: Message = { id: Date.now(), from: 'user', text: trimmed, time: now() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    // simulate bot thinking delay
    setTimeout(() => {
      const reply = getBotReply(trimmed)
      const botMsg: Message = { id: Date.now() + 1, from: 'bot', text: reply, time: now() }
      setTyping(false)
      setMessages((prev) => [...prev, botMsg])
      if (!open) setUnread((n) => n + 1)
    }, 900 + Math.random() * 600)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  // Render bold markdown **text**
  const renderText = (text: string) =>
    text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
    )

  return (
    <>
      {/* ── Floating Action Button ── */}
      <button
        className={`chatbot-fab${open ? ' chatbot-fab--open' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!open && unread > 0 && (
          <span className="chatbot-badge">{unread}</span>
        )}
        {/* Pulse ring when closed */}
        {!open && <span className="chatbot-pulse" />}
      </button>

      {/* ── Chat Panel ── */}
      <div className={`chatbot-panel${open ? ' chatbot-panel--open' : ''}`} role="dialog" aria-label="FabXP Chat">
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="chatbot-header-info">
            <p className="chatbot-header-name">{BOT_NAME}</p>
            <p className="chatbot-header-status">
              <span className="chatbot-status-dot" /> Online · Usually replies in seconds
            </p>
          </div>
          <button className="chatbot-close-btn" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chatbot-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`chatbot-msg chatbot-msg--${msg.from}`}>
              {msg.from === 'bot' && (
                <div className="chatbot-bot-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
              )}
              <div className="chatbot-bubble-wrap">
                <div className="chatbot-bubble">{renderText(msg.text)}</div>
                <span className="chatbot-time">{msg.time}</span>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {typing && (
            <div className="chatbot-msg chatbot-msg--bot">
              <div className="chatbot-bot-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="chatbot-bubble-wrap">
                <div className="chatbot-bubble chatbot-typing">
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies */}
        <div className="chatbot-quick-replies">
          {QUICK_REPLIES.map((qr) => (
            <button key={qr} className="chatbot-chip" onClick={() => sendMessage(qr)}>
              {qr}
            </button>
          ))}
        </div>

        {/* Input */}
        <form className="chatbot-input-row" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            className="chatbot-input"
            type="text"
            placeholder="Type your message…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={300}
          />
          <button
            className={`chatbot-send-btn${input.trim() ? ' chatbot-send-btn--active' : ''}`}
            type="submit"
            aria-label="Send"
            disabled={!input.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <p className="chatbot-footer-note">Powered by FabXP · Travel Intelligence</p>
      </div>
    </>
  )
}

export default Chatbot
