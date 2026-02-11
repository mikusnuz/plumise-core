export enum AgentStatus {
  ACTIVE = 0,
  INACTIVE = 1,
  SLASHED = 2,
}

export interface Agent {
  wallet: `0x${string}`
  nodeId: `0x${string}`
  metadata: string
  registeredAt: bigint
  lastHeartbeat: bigint
  status: AgentStatus
  stake: bigint
}

export interface Contribution {
  taskCount: bigint
  uptimeSeconds: bigint
  responseScore: bigint
  lastUpdated: bigint
  processedTokens: bigint
  avgLatencyInv: bigint
}

export interface UserCredit {
  balance: bigint
  usedCredits: bigint
  lastDeposit: bigint
  tier: bigint
}

export interface Challenge {
  id: bigint
  difficulty: bigint
  seed: `0x${string}`
  createdAt: bigint
  expiresAt: bigint
  solved: boolean
  solver: `0x${string}`
  rewardBonus: bigint
}
