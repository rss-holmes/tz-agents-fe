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

/**
 * Maps TranZact `currency_value` IDs to locale/currency metadata.
 * Ported from tranzact-frontend/src/constants/currency.js — keep in sync.
 * Unknown IDs fall back to INR.
 */
export const currencyData: Record<number, CurrencyMeta> = {
  1: { currency_code: 'INR', currency_symbol: '₹', currency_style: 'en-IN' },
  2: {
    currency_code: 'USD',
    currency_symbol: 'US$',
    currency_style: 'zh-Hans-CN',
  },
  3: { currency_code: 'GBP', currency_symbol: '£', currency_style: 'en-GB' },
  4: { currency_code: 'EUR', currency_symbol: '€', currency_style: 'en-EU' },
  5: { currency_code: 'JPY', currency_symbol: '¥', currency_style: 'en-JP' },
  6: { currency_code: 'INR', currency_symbol: '₹', currency_style: 'en-IN' },
  7: { currency_code: 'AUD', currency_symbol: 'A$', currency_style: 'en-US' },
  8: { currency_code: 'AED', currency_symbol: 'AED', currency_style: 'en-US' },
  9: { currency_code: 'CAD', currency_symbol: 'CA$', currency_style: 'en-US' },
  10: { currency_code: 'BRL', currency_symbol: 'R$', currency_style: 'en-US' },
  11: { currency_code: 'GHS', currency_symbol: 'GH₵', currency_style: 'en-US' },
  12: { currency_code: 'SAR', currency_symbol: 'SAR', currency_style: 'en-US' },
  13: { currency_code: 'CNY', currency_symbol: 'CNY', currency_style: 'en-US' },
  14: { currency_code: 'KWD', currency_symbol: 'KD', currency_style: 'en-US' },
  15: { currency_code: 'PAB', currency_symbol: 'B/', currency_style: 'en-US' },
  16: { currency_code: 'SGD', currency_symbol: 'S$', currency_style: 'en-US' },
  17: { currency_code: 'AFN', currency_symbol: '؋', currency_style: 'en-US' },
  18: { currency_code: 'ALL', currency_symbol: 'L', currency_style: 'en-US' },
  19: { currency_code: 'AMD', currency_symbol: '֏', currency_style: 'en-US' },
  20: { currency_code: 'ANG', currency_symbol: 'NAƒ', currency_style: 'en-US' },
  21: { currency_code: 'AOA', currency_symbol: 'Kz', currency_style: 'en-US' },
  22: {
    currency_code: 'ARS',
    currency_symbol: '$m/n',
    currency_style: 'en-US',
  },
  23: { currency_code: 'AWG', currency_symbol: 'ƒ.', currency_style: 'en-US' },
  24: { currency_code: 'AZN', currency_symbol: '₼', currency_style: 'en-US' },
  25: { currency_code: 'BAM', currency_symbol: 'KM', currency_style: 'en-US' },
  26: {
    currency_code: 'BBD',
    currency_symbol: 'BDS$',
    currency_style: 'en-US',
  },
  27: { currency_code: 'BDT', currency_symbol: '৳', currency_style: 'en-US' },
  28: { currency_code: 'BGN', currency_symbol: 'лв.', currency_style: 'en-US' },
  29: {
    currency_code: 'BHD',
    currency_symbol: '.د.ب',
    currency_style: 'en-US',
  },
  30: { currency_code: 'BIF', currency_symbol: 'FBu', currency_style: 'en-US' },
  31: { currency_code: 'BMD', currency_symbol: 'BD$', currency_style: 'en-US' },
  32: { currency_code: 'BND', currency_symbol: 'B$', currency_style: 'en-US' },
  33: { currency_code: 'BOB', currency_symbol: 'Bs.', currency_style: 'en-US' },
  34: { currency_code: 'BSD', currency_symbol: 'B$', currency_style: 'en-US' },
  35: { currency_code: 'BTN', currency_symbol: 'Nu.', currency_style: 'en-US' },
  36: { currency_code: 'BWP', currency_symbol: 'P', currency_style: 'en-US' },
  37: { currency_code: 'BYN', currency_symbol: 'Rbl', currency_style: 'en-US' },
  38: { currency_code: 'BZD', currency_symbol: 'BZ$', currency_style: 'en-US' },
  39: { currency_code: 'CDF', currency_symbol: 'FC', currency_style: 'en-US' },
  40: { currency_code: 'CHF', currency_symbol: 'CHF', currency_style: 'en-US' },
  41: {
    currency_code: 'CLP',
    currency_symbol: 'CLP$',
    currency_style: 'en-US',
  },
  42: {
    currency_code: 'COP',
    currency_symbol: 'COP$',
    currency_style: 'en-US',
  },
  43: { currency_code: 'CRC', currency_symbol: '₡', currency_style: 'en-US' },
  44: {
    currency_code: 'CUC',
    currency_symbol: 'CUC$',
    currency_style: 'en-US',
  },
  45: { currency_code: 'CUP', currency_symbol: '$MN', currency_style: 'en-US' },
  46: { currency_code: 'CVE', currency_symbol: 'Esc', currency_style: 'en-US' },
  47: { currency_code: 'CZK', currency_symbol: 'Kč', currency_style: 'en-US' },
  48: { currency_code: 'DJF', currency_symbol: 'Fdj', currency_style: 'en-US' },
  49: { currency_code: 'DKK', currency_symbol: 'kr.', currency_style: 'en-US' },
  50: { currency_code: 'DOP', currency_symbol: 'RD$', currency_style: 'en-US' },
  51: { currency_code: 'DZD', currency_symbol: 'دج', currency_style: 'en-US' },
  52: { currency_code: 'EGP', currency_symbol: 'E£', currency_style: 'en-US' },
  53: { currency_code: 'ERN', currency_symbol: 'Nfk', currency_style: 'en-US' },
  54: { currency_code: 'ETB', currency_symbol: 'Br', currency_style: 'en-US' },
  55: { currency_code: 'FJD', currency_symbol: 'FJ$', currency_style: 'en-US' },
  56: { currency_code: 'FKP', currency_symbol: 'FK£', currency_style: 'en-US' },
  57: { currency_code: 'GEL', currency_symbol: '₾', currency_style: 'en-US' },
  58: {
    currency_code: 'GIP',
    currency_symbol: 'GIP£',
    currency_style: 'en-US',
  },
  59: { currency_code: 'GMD', currency_symbol: 'D', currency_style: 'en-US' },
  60: { currency_code: 'GNF', currency_symbol: 'GFr', currency_style: 'en-US' },
  61: { currency_code: 'GTQ', currency_symbol: 'Q', currency_style: 'en-US' },
  62: { currency_code: 'GYD', currency_symbol: 'G$', currency_style: 'en-US' },
  63: { currency_code: 'HKD', currency_symbol: 'HK$', currency_style: 'en-US' },
  64: { currency_code: 'HNL', currency_symbol: 'L', currency_style: 'en-US' },
  65: { currency_code: 'HRK', currency_symbol: 'kn', currency_style: 'en-US' },
  66: { currency_code: 'HTG', currency_symbol: 'G', currency_style: 'en-US' },
  67: { currency_code: 'HUF', currency_symbol: 'Ft', currency_style: 'en-US' },
  68: { currency_code: 'IDR', currency_symbol: 'Rp', currency_style: 'en-US' },
  69: { currency_code: 'ILS', currency_symbol: '₪', currency_style: 'en-US' },
  70: { currency_code: 'IQD', currency_symbol: 'ID', currency_style: 'en-US' },
  71: { currency_code: 'IRR', currency_symbol: 'Rls', currency_style: 'en-US' },
  72: { currency_code: 'ISK', currency_symbol: 'kr.', currency_style: 'en-US' },
  73: { currency_code: 'JMD', currency_symbol: 'J$', currency_style: 'en-US' },
  74: { currency_code: 'JOD', currency_symbol: 'JD', currency_style: 'en-US' },
  75: { currency_code: 'KES', currency_symbol: 'KSh', currency_style: 'en-US' },
  76: { currency_code: 'KGS', currency_symbol: 'som', currency_style: 'en-US' },
  77: { currency_code: 'KHR', currency_symbol: '៛', currency_style: 'en-US' },
  78: { currency_code: 'KMF', currency_symbol: 'CF', currency_style: 'en-US' },
  79: { currency_code: 'KPW', currency_symbol: '₩', currency_style: 'en-US' },
  80: { currency_code: 'KRW', currency_symbol: '₩', currency_style: 'en-US' },
  81: { currency_code: 'KYD', currency_symbol: 'CI$', currency_style: 'en-US' },
  82: { currency_code: 'KZT', currency_symbol: '₸', currency_style: 'en-US' },
  83: { currency_code: 'LAK', currency_symbol: '₭', currency_style: 'en-US' },
  84: { currency_code: 'LBP', currency_symbol: 'L£', currency_style: 'en-US' },
  85: { currency_code: 'LKR', currency_symbol: '௹', currency_style: 'en-US' },
  86: { currency_code: 'LRD', currency_symbol: 'L$', currency_style: 'en-US' },
  87: { currency_code: 'LSL', currency_symbol: 'L', currency_style: 'en-US' },
  88: { currency_code: 'LYD', currency_symbol: 'ل.د', currency_style: 'en-US' },
  89: { currency_code: 'MAD', currency_symbol: 'DH', currency_style: 'en-US' },
  90: { currency_code: 'MDL', currency_symbol: 'L', currency_style: 'en-US' },
  91: { currency_code: 'MGA', currency_symbol: 'Ar', currency_style: 'en-US' },
  92: { currency_code: 'MKD', currency_symbol: 'ден', currency_style: 'en-US' },
  93: { currency_code: 'MMK', currency_symbol: 'Ks.', currency_style: 'en-US' },
  94: { currency_code: 'MNT', currency_symbol: '₮', currency_style: 'en-US' },
  95: {
    currency_code: 'MOP',
    currency_symbol: 'MOP$',
    currency_style: 'en-US',
  },
  96: { currency_code: 'MRU', currency_symbol: 'UM', currency_style: 'en-US' },
  97: { currency_code: 'MUR', currency_symbol: '₨', currency_style: 'en-US' },
  98: { currency_code: 'MVR', currency_symbol: '.ރ', currency_style: 'en-US' },
  99: { currency_code: 'MWK', currency_symbol: 'MK', currency_style: 'en-US' },
  100: {
    currency_code: 'MXN',
    currency_symbol: 'MEX$',
    currency_style: 'en-US',
  },
  101: { currency_code: 'MYR', currency_symbol: 'RM', currency_style: 'en-US' },
  102: {
    currency_code: 'MZN',
    currency_symbol: 'MTn',
    currency_style: 'en-US',
  },
  103: { currency_code: 'NAD', currency_symbol: 'N$', currency_style: 'en-US' },
  104: { currency_code: 'NGN', currency_symbol: '₦', currency_style: 'en-US' },
  105: { currency_code: 'NIO', currency_symbol: 'C$', currency_style: 'en-US' },
  106: { currency_code: 'NOK', currency_symbol: 'kr', currency_style: 'en-US' },
  107: { currency_code: 'NPR', currency_symbol: '₹', currency_style: 'en-US' },
  108: {
    currency_code: 'NZD',
    currency_symbol: 'NZ$',
    currency_style: 'en-US',
  },
  109: {
    currency_code: 'OMR',
    currency_symbol: 'ر.ع.',
    currency_style: 'en-US',
  },
  110: { currency_code: 'PEN', currency_symbol: 'S/', currency_style: 'en-US' },
  111: { currency_code: 'PGK', currency_symbol: 'K', currency_style: 'en-US' },
  112: { currency_code: 'PHP', currency_symbol: '₱', currency_style: 'en-US' },
  113: { currency_code: 'PKR', currency_symbol: '₨', currency_style: 'en-US' },
  114: { currency_code: 'PLN', currency_symbol: 'zł', currency_style: 'en-US' },
  115: { currency_code: 'PYG', currency_symbol: '₲', currency_style: 'en-US' },
  116: {
    currency_code: 'QAR',
    currency_symbol: 'ر.ق',
    currency_style: 'en-US',
  },
  117: {
    currency_code: 'RON',
    currency_symbol: 'Lei',
    currency_style: 'en-US',
  },
  118: {
    currency_code: 'RSD',
    currency_symbol: 'РСД',
    currency_style: 'en-US',
  },
  119: { currency_code: 'RUB', currency_symbol: '₽', currency_style: 'en-US' },
  120: {
    currency_code: 'RWF',
    currency_symbol: 'FRw',
    currency_style: 'en-US',
  },
  121: {
    currency_code: 'SBD',
    currency_symbol: 'SI$',
    currency_style: 'en-US',
  },
  122: { currency_code: 'SCR', currency_symbol: '₨', currency_style: 'en-US' },
  123: {
    currency_code: 'SDG',
    currency_symbol: 'ج.س',
    currency_style: 'en-US',
  },
  124: { currency_code: 'SEK', currency_symbol: 'kr', currency_style: 'en-US' },
  125: { currency_code: 'SHP', currency_symbol: '£', currency_style: 'en-US' },
  126: { currency_code: 'SKK', currency_symbol: 'Sk', currency_style: 'en-US' },
  127: { currency_code: 'SLE', currency_symbol: 'Le', currency_style: 'en-US' },
  128: {
    currency_code: 'SOS',
    currency_symbol: 'Sh.So',
    currency_style: 'en-US',
  },
  129: {
    currency_code: 'SRD',
    currency_symbol: 'Sur$',
    currency_style: 'en-US',
  },
  130: {
    currency_code: 'SSP',
    currency_symbol: 'SSP£',
    currency_style: 'en-US',
  },
  131: { currency_code: 'STD', currency_symbol: 'Db', currency_style: 'en-US' },
  132: { currency_code: 'SVC', currency_symbol: '₡', currency_style: 'en-US' },
  133: {
    currency_code: 'SYP',
    currency_symbol: 'SYP',
    currency_style: 'en-US',
  },
  134: { currency_code: 'SZL', currency_symbol: 'E', currency_style: 'en-US' },
  135: { currency_code: 'THB', currency_symbol: '฿', currency_style: 'en-US' },
  136: { currency_code: 'TJS', currency_symbol: 'SM', currency_style: 'en-US' },
  137: { currency_code: 'TMT', currency_symbol: 'm', currency_style: 'en-US' },
  138: {
    currency_code: 'TND',
    currency_symbol: 'د.ت',
    currency_style: 'en-US',
  },
  139: { currency_code: 'TOP', currency_symbol: 'T$', currency_style: 'en-US' },
  140: { currency_code: 'TRY', currency_symbol: '₺', currency_style: 'en-US' },
  141: {
    currency_code: 'TTD',
    currency_symbol: 'TT$',
    currency_style: 'en-US',
  },
  142: {
    currency_code: 'TWD',
    currency_symbol: 'NT$',
    currency_style: 'en-US',
  },
  143: {
    currency_code: 'TZS',
    currency_symbol: 'TZS',
    currency_style: 'en-US',
  },
  144: { currency_code: 'UAH', currency_symbol: '₴', currency_style: 'en-US' },
  145: {
    currency_code: 'UGX',
    currency_symbol: 'USh',
    currency_style: 'en-US',
  },
  146: { currency_code: 'UYU', currency_symbol: '$U', currency_style: 'en-US' },
  147: {
    currency_code: 'UZS',
    currency_symbol: 'som',
    currency_style: 'en-US',
  },
  148: {
    currency_code: 'VES',
    currency_symbol: 'Bs.',
    currency_style: 'en-US',
  },
  149: { currency_code: 'VND', currency_symbol: '₫', currency_style: 'en-US' },
  150: {
    currency_code: 'WST',
    currency_symbol: 'SAT',
    currency_style: 'en-US',
  },
  151: {
    currency_code: 'XAF',
    currency_symbol: 'F.CFA',
    currency_style: 'en-US',
  },
  152: {
    currency_code: 'XCD',
    currency_symbol: 'EC$',
    currency_style: 'en-US',
  },
  153: { currency_code: 'XOF', currency_symbol: 'Fr', currency_style: 'en-US' },
  154: { currency_code: 'XPF', currency_symbol: 'Fr', currency_style: 'en-US' },
  155: {
    currency_code: 'YER',
    currency_symbol: 'YER',
    currency_style: 'en-US',
  },
  156: { currency_code: 'ZAR', currency_symbol: 'R', currency_style: 'en-US' },
  157: { currency_code: 'ZMK', currency_symbol: 'ZK', currency_style: 'en-US' },
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
