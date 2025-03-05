"use client"

import { Doc, Id } from "@/convex/_generated/dataModel";

interface ChatInterfaceProps {
  chatId: Id<"chats">
  initialMessages: Doc<"messages">[];
}

function ChatInterface ({ chatId, initialMessages}: ChatInterfaceProps) {
  return (
    <div>ChatInterface</div>
  )
}

export default ChatInterface
