import { Badge } from '@/components/ui/badge'
import type { Mention } from '@/types/chat'

interface Props {
  mention: Mention
}

const TYPE_COLORS: Record<string, string> = {
  counterparty: 'bg-purple-100 text-purple-800 hover:bg-purple-100',
  item: 'bg-green-100 text-green-800 hover:bg-green-100',
  terms: 'bg-amber-100 text-amber-800 hover:bg-amber-100',
  billing_address: 'bg-blue-100 text-blue-800 hover:bg-blue-100',
}

export default function MentionChip({ mention }: Props) {
  return (
    <Badge
      variant="secondary"
      className={`text-xs ${TYPE_COLORS[mention.type] ?? 'bg-gray-100 text-gray-800 hover:bg-gray-100'}`}
    >
      @{mention.displayName}
    </Badge>
  )
}
