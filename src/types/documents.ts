/**
 * PODraft represents the progressively-built PO state.
 * Fields are optional because the draft fills up incrementally.
 * Shown in the right-side panel as soon as any field is populated.
 */
export interface PODraft {
  counterparty?: { id: string; name: string }
  items?: Array<{
    item_id: string
    name: string
    qty?: number
    unit?: string
    rate?: number
    total?: number
  }>
  terms?: { id: string; name: string }
  billing_address?: { id: string; text: string }
  subtotal?: number
  notes?: string
}

/** Final preview payload sent by backend when all required fields are filled */
export interface POPreviewPayload extends Required<PODraft> {
  items: Array<{
    item_id: string
    name: string
    qty: number
    unit: string
    rate: number
    total: number
  }>
  subtotal: number
}
