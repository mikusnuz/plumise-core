import {
  createPublicClient,
  createWalletClient,
  http,
  webSocket,
  type Chain,
  type PublicClient,
  type WalletClient,
  type Account,
  type Transport,
} from 'viem'
import { plumise, plumiseTestnet } from './chains.js'

export interface CreatePlumiseClientOptions {
  chain?: 'mainnet' | 'testnet' | Chain
  rpcUrl?: string
  wsUrl?: string
  account?: Account
}

export interface PlumiseClient {
  chain: Chain
  network: 'mainnet' | 'testnet'
  publicClient: PublicClient
  walletClient: WalletClient | null
}

function resolveChain(input?: 'mainnet' | 'testnet' | Chain): { chain: Chain; network: 'mainnet' | 'testnet' } {
  if (!input || input === 'mainnet') return { chain: plumise, network: 'mainnet' }
  if (input === 'testnet') return { chain: plumiseTestnet, network: 'testnet' }
  const network = input.id === plumiseTestnet.id ? 'testnet' : 'mainnet'
  return { chain: input, network }
}

export function createPlumiseClient(options: CreatePlumiseClientOptions = {}): PlumiseClient {
  const { chain, network } = resolveChain(options.chain)

  const transport = options.rpcUrl ? http(options.rpcUrl) : http()

  const publicClient = createPublicClient({
    chain,
    transport,
  })

  let walletClient: WalletClient | null = null
  if (options.account) {
    walletClient = createWalletClient({
      chain,
      transport,
      account: options.account,
    })
  }

  return { chain, network, publicClient, walletClient }
}
