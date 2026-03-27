import type {
  ItemDiscount,
  NonTaxableExtraChargePayload,
  PlaceOfSupply,
  TaxRef,
} from '@/lib/types/documents'

export interface CurrencyMeta {
  currency_code: string
  currency_symbol: string
  currency_style: string
}

/** Maps TranZact `currency_value` IDs to locale/currency metadata. Unknown IDs fall back to INR. */
export const currencyData: Record<number, CurrencyMeta> = {
  1: { currency_code: 'INR', currency_symbol: '₹', currency_style: 'en-IN' },
  2: { currency_code: 'USD', currency_symbol: 'US$', currency_style: 'en-US' },
  3: { currency_code: 'GBP', currency_symbol: '£', currency_style: 'en-GB' },
  4: { currency_code: 'EUR', currency_symbol: '€', currency_style: 'de-DE' },
  5: { currency_code: 'AUD', currency_symbol: 'A$', currency_style: 'en-AU' },
  6: { currency_code: 'CAD', currency_symbol: 'C$', currency_style: 'en-CA' },
  7: { currency_code: 'SGD', currency_symbol: 'S$', currency_style: 'en-SG' },
  8: { currency_code: 'AED', currency_symbol: 'د.إ', currency_style: 'en-AE' },
  9: { currency_code: 'SAR', currency_symbol: '﷼', currency_style: 'ar-SA' },
  10: { currency_code: 'HKD', currency_symbol: 'HK$', currency_style: 'en-HK' },
  11: { currency_code: 'CNY', currency_symbol: '¥', currency_style: 'zh-CN' },
  12: { currency_code: 'JPY', currency_symbol: '¥', currency_style: 'ja-JP' },
  13: { currency_code: 'CHF', currency_symbol: 'CHF', currency_style: 'de-CH' },
  14: { currency_code: 'SEK', currency_symbol: 'kr', currency_style: 'sv-SE' },
  15: { currency_code: 'NOK', currency_symbol: 'kr', currency_style: 'nb-NO' },
  16: { currency_code: 'DKK', currency_symbol: 'kr', currency_style: 'da-DK' },
  17: { currency_code: 'NZD', currency_symbol: 'NZ$', currency_style: 'en-NZ' },
  18: { currency_code: 'ZAR', currency_symbol: 'R', currency_style: 'en-ZA' },
  19: { currency_code: 'BRL', currency_symbol: 'R$', currency_style: 'pt-BR' },
  20: { currency_code: 'MXN', currency_symbol: 'MX$', currency_style: 'es-MX' },
  21: { currency_code: 'TRY', currency_symbol: '₺', currency_style: 'tr-TR' },
  22: { currency_code: 'RUB', currency_symbol: '₽', currency_style: 'ru-RU' },
  23: { currency_code: 'PLN', currency_symbol: 'zł', currency_style: 'pl-PL' },
  24: { currency_code: 'THB', currency_symbol: '฿', currency_style: 'th-TH' },
  25: { currency_code: 'MYR', currency_symbol: 'RM', currency_style: 'ms-MY' },
  26: { currency_code: 'IDR', currency_symbol: 'Rp', currency_style: 'id-ID' },
  27: { currency_code: 'PHP', currency_symbol: '₱', currency_style: 'en-PH' },
  28: { currency_code: 'VND', currency_symbol: '₫', currency_style: 'vi-VN' },
  29: { currency_code: 'KRW', currency_symbol: '₩', currency_style: 'ko-KR' },
  30: { currency_code: 'TWD', currency_symbol: 'NT$', currency_style: 'zh-TW' },
  31: { currency_code: 'ILS', currency_symbol: '₪', currency_style: 'he-IL' },
  32: { currency_code: 'EGP', currency_symbol: 'E£', currency_style: 'ar-EG' },
  33: { currency_code: 'NGN', currency_symbol: '₦', currency_style: 'en-NG' },
  34: { currency_code: 'KES', currency_symbol: 'KSh', currency_style: 'en-KE' },
  35: { currency_code: 'QAR', currency_symbol: '﷼', currency_style: 'ar-QA' },
  36: { currency_code: 'KWD', currency_symbol: 'د.ك', currency_style: 'ar-KW' },
  37: {
    currency_code: 'BHD',
    currency_symbol: '.د.ب',
    currency_style: 'ar-BH',
  },
  38: { currency_code: 'OMR', currency_symbol: '﷼', currency_style: 'ar-OM' },
  39: { currency_code: 'JOD', currency_symbol: 'د.ا', currency_style: 'ar-JO' },
  40: { currency_code: 'LBP', currency_symbol: 'ل.ل', currency_style: 'ar-LB' },
  41: { currency_code: 'PKR', currency_symbol: '₨', currency_style: 'en-PK' },
  42: { currency_code: 'BDT', currency_symbol: '৳', currency_style: 'bn-BD' },
  43: { currency_code: 'LKR', currency_symbol: '₨', currency_style: 'si-LK' },
  44: { currency_code: 'NPR', currency_symbol: '₨', currency_style: 'ne-NP' },
  45: { currency_code: 'MMK', currency_symbol: 'K', currency_style: 'my-MM' },
  46: { currency_code: 'KHR', currency_symbol: '៛', currency_style: 'km-KH' },
  47: { currency_code: 'MNT', currency_symbol: '₮', currency_style: 'mn-MN' },
  48: {
    currency_code: 'UZS',
    currency_symbol: "so'm",
    currency_style: 'uz-UZ',
  },
  49: { currency_code: 'KZT', currency_symbol: '₸', currency_style: 'kk-KZ' },
  50: { currency_code: 'UAH', currency_symbol: '₴', currency_style: 'uk-UA' },
  51: { currency_code: 'CZK', currency_symbol: 'Kč', currency_style: 'cs-CZ' },
  52: { currency_code: 'HUF', currency_symbol: 'Ft', currency_style: 'hu-HU' },
  53: { currency_code: 'RON', currency_symbol: 'lei', currency_style: 'ro-RO' },
  54: { currency_code: 'BGN', currency_symbol: 'лв', currency_style: 'bg-BG' },
  55: { currency_code: 'HRK', currency_symbol: 'kn', currency_style: 'hr-HR' },
  56: { currency_code: 'RSD', currency_symbol: 'дин', currency_style: 'sr-RS' },
  57: { currency_code: 'ISK', currency_symbol: 'kr', currency_style: 'is-IS' },
  58: { currency_code: 'ARS', currency_symbol: 'US$', currency_style: 'es-AR' },
  59: { currency_code: 'CLP', currency_symbol: '$', currency_style: 'es-CL' },
  60: { currency_code: 'COP', currency_symbol: '$', currency_style: 'es-CO' },
}

const FALLBACK_CURRENCY: CurrencyMeta = currencyData[1]

export function getCurrencyMeta(currencyValue?: number): CurrencyMeta {
  const key = currencyValue ?? 1
  return currencyData[key] ?? FALLBACK_CURRENCY
}

export function formatCurrency(amount: number, currencyValue?: number): string {
  const { currency_code, currency_style } = getCurrencyMeta(currencyValue)
  const safe = Number.isFinite(amount) ? amount : 0
  return safe.toLocaleString(currency_style, {
    style: 'currency',
    currency: currency_code,
  })
}

/** Display label for header: symbol + ISO code (e.g. `₹ INR`). */
export function formatCurrencyLabel(currencyValue?: number): string {
  const { currency_code, currency_symbol } = getCurrencyMeta(currencyValue)
  return `${currency_symbol} ${currency_code}`.trim()
}

export function formatDiscount(
  d?: ItemDiscount,
  currencyValue?: number,
): string | undefined {
  if (!d) return undefined
  const v = d.value
  const sym = getCurrencyMeta(currencyValue).currency_symbol
  if (d.type === 0) return `${sym}${v}`
  if (d.type === 1) return `${v}%`
  if (d.type === 2) return `${sym}${v}/unit`
  return undefined
}

export function formatTaxNames(taxes?: TaxRef[]): string | undefined {
  if (!taxes?.length) return undefined
  const names = taxes.map((t) => t.name).filter(Boolean)
  if (!names.length) return undefined
  return names.join(', ')
}

export function formatPlaceOfSupply(pos?: PlaceOfSupply): string | undefined {
  if (!pos) return undefined
  const parts = [pos.city, pos.state, pos.country].filter(Boolean)
  if (!parts.length) return undefined
  return parts.join(', ')
}

export function formatTcsPercent(val?: number): string | undefined {
  if (val === undefined) return undefined
  return `${(val * 100).toFixed(2)}%`
}

/** 0 = Less (subtract), 1 = Add — matches backend ChargeType. */
export function formatNtecSign(chargeType?: number): string {
  return chargeType === 0 ? '(-)' : '(+)'
}

export function formatNtecValue(
  charge: NonTaxableExtraChargePayload,
  currencyValue?: number,
): string {
  const sign = formatNtecSign(charge.charge_type?.type)
  const raw = parseFloat(charge.value ?? '')
  const amount = Number.isFinite(raw) ? raw : 0
  const unit = charge.unit_type?.type ?? 0
  if (unit === 1) {
    return `${sign} ${amount}%`
  }
  return `${sign} ${formatCurrency(amount, currencyValue)}`
}

