"use client"

import { useRouter } from "next/navigation"
import { useQuery, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2, Search, FileSearch, Database, FileText } from "lucide-react"
import TimeAgo from "react-timeago"
import type { Doc, Id } from "@/convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { useNavigation } from "@/lib/context/navigation"
import { useState } from "react"

function ChatRow({
  chat,
  onDelete,
  isActive,
}: {
  chat: Doc<"chats">
  onDelete: (id: Id<"chats">) => void
  isActive: boolean
}) {
  const router = useRouter()
  const { closeMobileNav } = useNavigation()
  //grab the last message from convex
  const lastMessage = useQuery(api.messages.getLastMessage, {
    chatId: chat._id,
  })

  const handleClick = () => {
    router.push(`/dashboard/chat/${chat._id}`)
    closeMobileNav()
  }

  return (
    <div
      className={cn(
        "group rounded-xl border transition-all duration-200 cursor-pointer",
        isActive
          ? "border-blue-300 bg-blue-50 shadow-md"
          : "border-blue-100/30 bg-white/50 backdrop-blur-sm hover:bg-white/80 shadow-sm hover:shadow",
      )}
      onClick={handleClick}
    >
      <div className="p-5 flex justify-between items-center">
        <div className="flex items-start gap-3 flex-1 min-w-0 overflow-hidden">
          <div
            className={cn(
              "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center",
              isActive ? "bg-blue-500 text-white" : "bg-blue-100 text-blue-600",
            )}
          >
            {lastMessage?.role === "user" ? <Search className="h-4 w-4" /> : <FileText className="h-4 w-4" />}
          </div>
          <div className="flex-1 min-w-0 overflow-hidden mr-3">
            <p
              className={cn(
                "text-sm font-medium whitespace-nowrap overflow-hidden text-ellipsis",
                isActive ? "text-blue-800" : "text-gray-700",
              )}
            >
              {lastMessage ? (
                <>
                  {lastMessage.role === "user" ? "Query: " : "Results: "}
                  {lastMessage.content.replace(/\\n/g, " ")}
                </>
              ) : (
                <span className="text-gray-400">New patient data query</span>
              )}
            </p>
            {lastMessage && (
              <p className="text-xs text-gray-400 mt-1.5 font-medium">
                <TimeAgo date={lastMessage.createdAt} />
              </p>
            )}
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity duration-200 h-8 w-8"
          onClick={(e) => {
            e.stopPropagation()
            onDelete(chat._id)
          }}
        >
          <Trash2 className="h-4 w-4 text-gray-400 hover:text-red-500 transition-colors" />
        </Button>
      </div>
    </div>
  )
}

export default function Sidebar() {
  const router = useRouter()
  const { isMobileNavOpen, closeMobileNav } = useNavigation()
  const [searchQuery, setSearchQuery] = useState("")

  const chats = useQuery(api.chats.listChats)
  const createChat = useMutation(api.chats.createChat)
  const deleteChat = useMutation(api.chats.deleteChat)

  // Get current chat ID from URL
  const currentChatId = typeof window !== "undefined" ? window.location.pathname.split("/").pop() : null

  const handleNewChat = async () => {
    const chatId = await createChat({ title: "New Patient Query" })
    router.push(`/dashboard/chat/${chatId}`)
    closeMobileNav()
  }

  const handleDeleteChat = async (id: Id<"chats">) => {
    await deleteChat({ id })
    // If we're currently viewing this chat, redirect to dashboard
    if (window.location.pathname.includes(id)) {
      router.push("/dashboard")
    }
  }

  // Filter chats based on search query
  const filteredChats = chats?.filter((chat) => {
    if (!searchQuery) return true
    // You can expand this to search through message content if needed
    return chat.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <>
      {/* Background Overlay for mobile */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 bg-blue-900/20 backdrop-blur-sm z-40 md:hidden" onClick={closeMobileNav} />
      )}

      <div
        className={cn(
          "fixed md:inset-y-0 top-14 bottom-0 left-0 z-50 w-80 bg-gradient-to-b from-white to-blue-50/90 backdrop-blur-xl border-r border-blue-100 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
          isMobileNavOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="p-5 border-b border-blue-100">
          <Button
            onClick={handleNewChat}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white shadow-md hover:shadow-lg transition-all duration-200 font-medium py-5"
          >
            <PlusCircle className="mr-2 h-4 w-4" /> New Patient Data Query
          </Button>
        </div>

        <div className="p-5 border-b border-blue-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-400" />
            <input
              type="text"
              placeholder="Search previous queries..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white/80 text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent">
          {filteredChats?.length === 0 && (
            <div className="text-center py-10">
              <FileSearch className="h-12 w-12 mx-auto text-blue-200 mb-4" />
              <p className="text-blue-800 font-medium">No queries found</p>
              <p className="text-sm text-blue-600 mt-2">
                {searchQuery ? "Try a different search term" : "Start a new patient data query"}
              </p>
            </div>
          )}

          {filteredChats?.map((chat) => (
            <ChatRow key={chat._id} chat={chat} onDelete={handleDeleteChat} isActive={chat._id === currentChatId} />
          ))}
        </div>

        <div className="p-5 border-t border-blue-100 bg-white/50">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Database className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900">MediQuery EHR Assistant</p>
              <p className="text-xs text-blue-600">Natural language patient data search</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


