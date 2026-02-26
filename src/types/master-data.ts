export interface MasterDataCategory {
  type: string
  label: string
  icon: string
}

export interface MasterDataItem {
  id: string
  name: string
  [key: string]: unknown // Additional entity-specific fields
}
