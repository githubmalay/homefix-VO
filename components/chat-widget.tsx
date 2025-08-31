"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Bot } from "lucide-react"
import { saveBooking } from "@/lib/localStorage"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

type ChatState = "initial" | "ask_service" | "ask_date" | "ask_time" | "ask_handyman" | "confirm";

const services = ["Plumbing", "Electrical", "Carpentry", "Painting"];
const handymen = ["John Smith", "Sarah Wilson"];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [chatState, setChatState] = useState<ChatState>("initial");
  const [bookingData, setBookingData] = useState({
    service: "",
    date: "",
    time: "",
    handyman: "",
  });

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          {
            id: "1",
            text: "Hi! I'm your HomeFix assistant. How can I help you today?",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
      }, 500);
    }
  }, [isOpen, messages.length]);

  const handleStartBooking = () => {
    setMessages(prev => [...prev, { id: Date.now().toString(), text: "I'd like to book a service.", sender: "user", timestamp: new Date() }]);
    setChatState("ask_service");
    setTimeout(() => {
      const serviceOptions = services.map(s => `• ${s}`).join("<br/>");
      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: `Okay, what service do you need? You can choose from:<br/>${serviceOptions}`, sender: "bot", timestamp: new Date() }]);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages((prev) => [...prev, { id: Date.now().toString(), text: userMessage, sender: "user", timestamp: new Date() }]);
    setInputValue("");

    const respond = (botMessage: string, nextState: ChatState) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), text: botMessage, sender: "bot", timestamp: new Date() }]);
        setChatState(nextState);
      }, 1000);
    };

    switch (chatState) {
      case "initial":
        if (userMessage.toLowerCase().includes("book") || userMessage.toLowerCase().includes("service")) {
          handleStartBooking();
        } else {
          respond("I'm sorry, I can only help with booking services at the moment. Can I help you with that?", "initial");
        }
        break;
      case "ask_service":
        const selectedService = services.find(s => userMessage.toLowerCase().includes(s.toLowerCase()));
        if (selectedService) {
          setBookingData(prev => ({ ...prev, service: selectedService }));
          respond(`Great! You've selected ${selectedService}. When would you like the service? Please provide a date (e.g., 2024-09-10).`, "ask_date");
        } else {
          respond("I'm sorry, I don't recognize that service. Please choose from Plumbing, Electrical, Carpentry, or Painting.", "ask_service");
        }
        break;
      case "ask_date":
        setBookingData(prev => ({ ...prev, date: userMessage }));
        respond(`Got it. And what time?`, "ask_time");
        break;
      case "ask_time":
        setBookingData(prev => ({ ...prev, time: userMessage }));
        const handymanOptions = handymen.map(h => `• ${h}`).join("<br/>");
        respond(`Perfect. We have a few handymen available. Who would you like to book?<br/>${handymanOptions}`, "ask_handyman");
        break;
      case "ask_handyman":
        const selectedHandyman = handymen.find(h => userMessage.toLowerCase().includes(h.toLowerCase()));
        if (selectedHandyman) {
          const finalBookingData = { ...bookingData, handyman: selectedHandyman };
          setBookingData(finalBookingData);
          const bookingToSave = {
              customerName: "Meet", // As per previous logic
              service: finalBookingData.service,
              handyman: finalBookingData.handyman,
              date: finalBookingData.date,
              time: finalBookingData.time,
          };
          const savedBooking = saveBooking(bookingToSave);
          if (savedBooking) {
            respond(`Booking confirmed! You've successfully booked a ${savedBooking.service} with ${savedBooking.handyman} for ${savedBooking.date} at ${savedBooking.time}. Your booking ID is ${savedBooking.id}.`, "initial");
          } else {
            respond("There was an error saving your booking. Please try again.", "initial");
          }
        } else {
          respond("I'm sorry, I don't recognize that handyman. Please choose from John Smith or Sarah Wilson.", "ask_handyman");
        }
        break;
      default:
        respond("Something went wrong. Please refresh the page to start over.", "initial");
        break;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg transition-all duration-300 hover:scale-110"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
        </Button>
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 animate-in slide-in-from-bottom-2 duration-300">
          <Card className="h-full flex flex-col bg-white border-2 border-primary/20 shadow-2xl">
            {/* Header */}
            <div className="bg-primary text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <h3 className="font-semibold">HomeFix Support</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-6 w-6 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blue-100 mt-1">We typically reply instantly</p>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[70%] p-2 rounded-lg text-sm ${
                      message.sender === "user"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-gray-100 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: message.text }} />
                  </div>
                  {message.sender === "user" && (
                    <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm" className="px-3" disabled={!inputValue.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">Press Enter to send</p>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
