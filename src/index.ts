// Chains
export { plumise, plumiseTestnet } from './chains.js'

// Addresses
export { addresses } from './addresses.js'

// ABIs
export {
  agentRegistryAbi,
  rewardPoolAbi,
  inferencePaymentAbi,
  challengeManagerAbi,
} from './abis/index.js'

// Client
export { createPlumiseClient } from './client.js'
export type { CreatePlumiseClientOptions, PlumiseClient } from './client.js'

// Contract helpers
export {
  getAgentRegistry,
  getRewardPool,
  getInferencePayment,
  getChallengeManager,
} from './contracts.js'

// Utils
export {
  formatPLM,
  parsePLM,
  estimateInferenceCost,
  isProTier,
  COST_PER_1000_TOKENS,
  PRO_TIER_MINIMUM,
} from './utils.js'

// Types
export {
  AgentStatus,
  type Agent,
  type Contribution,
  type UserCredit,
  type Challenge,
} from './types.js'
