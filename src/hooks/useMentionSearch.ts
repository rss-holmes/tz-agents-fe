import { useState, useEffect, useRef } from 'react'
import { apiFetch } from '@/lib/api'
import type { MasterDataItem } from '@/types/master-data'

export function useMentionSearch(entityType: string | null, query: string) {
  const [results, setResults] = useState<MasterDataItem[]>([])
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    if (!entityType) {
      setResults([])
      return
    }

    clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({ q: query, limit: '10' })
        const data = await apiFetch<{ data: MasterDataItem[] }>(
          `/api/master/${entityType}?${params}`,
        )
        setResults(data.data)
      } catch {
        setResults([])
      } finally {
        setLoading(false)
      }
    }, 300)

    return () => clearTimeout(debounceRef.current)
  }, [entityType, query])

  return { results, loading }
}
