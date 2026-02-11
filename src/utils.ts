import { formatEther, parseEther } from 'viem'

/** Format wei to PLM string (e.g. "1.5") */
export function formatPLM(wei: bigint): string {
  return formatEther(wei)
}

/** Parse PLM string to wei (e.g. "1.5" → 1500000000000000000n) */
export function parsePLM(plm: string): bigint {
  return parseEther(plm)
}

/** Cost per 1000 tokens: 0.001 PLM */
export const COST_PER_1000_TOKENS = parseEther('0.001')

/** Pro tier minimum deposit: 100 PLM */
export const PRO_TIER_MINIMUM = parseEther('100')

/** Estimate inference cost in wei for a given token count */
export function estimateInferenceCost(tokenCount: number): bigint {
  return (COST_PER_1000_TOKENS * BigInt(tokenCount)) / 1000n
}

/** Check if a balance qualifies for Pro tier */
export function isProTier(balance: bigint): boolean {
  return balance >= PRO_TIER_MINIMUM
}
