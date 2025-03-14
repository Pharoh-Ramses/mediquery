"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import { FileText, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageBubbleProps {
  content: string;
  isUser?: boolean;
}

const formatMessage = (content: string) => {
  content = content.replace(/\\\\/g, "\\");
  content = content.replace(/\\n/g, "\n");
  content = content.replace(/---START---\n/g, "").replace(/\n?---END---/g, "");

  return content.trim();
};

export function MessageBubble({ content, isUser = false }: MessageBubbleProps) {
  const { user } = useUser();

  return (
    <div
      className={cn(
        "flex animate-in fade-in-0 slide-in-from-bottom-3 duration-300",
        isUser ? "justify-end" : "justify-start",
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-3 max-w-[85%] md:max-w-[75%] shadow-sm ring-1 ring-inset relative",
          isUser
            ? "bg-blue-600 text-white rounded-br-none ring-blue-700"
            : "bg-white text-gray-800 rounded-bl-none ring-blue-100",
        )}
      >
        <div className="whitespace-pre-wrap text-[15px] leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: formatMessage(content) }} />
        </div>

        <div
          className={cn(
            "absolute bottom-0",
            isUser
              ? "right-0 translate-x-1/2 translate-y-1/2"
              : "left-0 -translate-x-1/2 translate-y-1/2",
          )}
        >
          <div
            className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm",
              isUser ? "bg-blue-100 border-white" : "bg-blue-500 border-white",
            )}
          >
            {isUser ? (
              user?.imageUrl ? (
                <Avatar className="h-7 w-7">
                  <AvatarImage src={user.imageUrl} />
                  <AvatarFallback>
                    {user?.firstName?.charAt(0)}
                    {user?.lastName?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              ) : (
                <Search className="h-4 w-4 text-blue-600" />
              )
            ) : (
              <FileText className="h-4 w-4 text-white" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
