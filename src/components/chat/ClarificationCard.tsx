import { Sparkles } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import type { ChatMessage } from '@/types/chat'

interface Props {
  message: ChatMessage
  onSelect: (field: string, value: string) => void
  onFigureItOut: (field: string) => void
}

export default function ClarificationCard({
  message,
  onSelect,
  onFigureItOut,
}: Props) {
  const clar = message.clarification!
  const isAnswered = clar.answered

  return (
    <div className="flex justify-start">
      <Card className="max-w-md py-0 gap-0 shadow-sm">
        <CardContent className="p-4">
          <p className="text-gray-800 font-medium mb-3">{clar.question}</p>

          <div className="flex flex-col gap-2">
            {clar.options
              .filter((o) => !o.isFigureItOut)
              .map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  disabled={isAnswered}
                  onClick={() => onSelect(clar.field, option.value)}
                  className={`justify-start text-left h-auto px-3 py-2 text-sm
                    ${
                      isAnswered && clar.selectedValue === option.value
                        ? 'bg-blue-50 border-blue-300 text-blue-800'
                        : ''
                    }
                    ${isAnswered ? 'opacity-60 cursor-default' : ''}`}
                >
                  {option.label}
                </Button>
              ))}

            <Button
              variant="outline"
              disabled={isAnswered}
              onClick={() => onFigureItOut(clar.field)}
              className={`border-2 border-dashed border-amber-300 text-amber-700 font-medium text-sm h-auto px-3 py-2
                ${
                  isAnswered && clar.selectedValue === 'figure_it_out'
                    ? 'bg-amber-50'
                    : ''
                }
                ${isAnswered ? 'opacity-60 cursor-default' : 'hover:bg-amber-50'}`}
            >
              <Sparkles size={16} />
              Figure it out
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
