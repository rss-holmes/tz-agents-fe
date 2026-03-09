import Markdown from 'react-markdown'
import type { ChatMessage } from '@/types/chat'
import MentionChip from './MentionChip'

interface Props {
  message: ChatMessage
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {isUser ? (
        <div className="max-w-[80%] rounded-3xl bg-gray-100 px-5 py-3">
          <p className="whitespace-pre-wrap text-sm">{message.content}</p>

          {message.mentions && message.mentions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {message.mentions.map((mention) => (
                <MentionChip key={mention.id} mention={mention} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-[80%] prose prose-sm">
          <Markdown>{message.content}</Markdown>
        </div>
      )}
    </div>
  )
}
