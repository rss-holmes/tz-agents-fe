import { CheckCircle, XCircle } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import type { SubmitResult } from '@/types/chat'

interface Props {
  result: SubmitResult
}

export default function SubmitResultCard({ result }: Props) {
  return (
    <div className="flex justify-start">
      {result.success ? (
        <Alert className="bg-green-50 border-green-200 text-green-800 rounded-xl">
          <CheckCircle className="size-5" />
          <AlertDescription className="text-green-800">
            PO <strong>{result.poNumber ?? result.poId}</strong> created
            successfully!
          </AlertDescription>
        </Alert>
      ) : (
        <Alert variant="destructive" className="rounded-xl">
          <XCircle className="size-5" />
          <AlertDescription>
            Failed to create PO: {result.error}
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}
