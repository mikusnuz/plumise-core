import { getContract, type PublicClient, type WalletClient } from 'viem'
import { agentRegistryAbi } from './abis/AgentRegistry.js'
import { rewardPoolAbi } from './abis/RewardPool.js'
import { inferencePaymentAbi } from './abis/InferencePayment.js'
import { challengeManagerAbi } from './abis/ChallengeManager.js'
import { addresses } from './addresses.js'

type Network = 'mainnet' | 'testnet'
type Client = PublicClient | WalletClient

/** @internal suppress TS7056 by returning opaque type */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getAgentRegistry(client: Client, network: Network = 'mainnet') {
  return getContract({
    address: addresses[network].AgentRegistry,
    abi: agentRegistryAbi,
    client,
  }) as any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export function getRewardPool(client: Client, network: Network = 'mainnet') {
  return getContract({
    address: addresses[network].RewardPool,
    abi: rewardPoolAbi,
    client,
  }) as any
}

export function getInferencePayment(client: Client, network: Network = 'mainnet') {
  return getContract({
    address: addresses[network].InferencePayment,
    abi: inferencePaymentAbi,
    client,
  }) as any
}

export function getChallengeManager(client: Client, network: Network = 'mainnet') {
  return getContract({
    address: addresses[network].ChallengeManager,
    abi: challengeManagerAbi,
    client,
  }) as any
}
