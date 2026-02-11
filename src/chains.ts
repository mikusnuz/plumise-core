import { defineChain } from 'viem'

export const plumise = defineChain({
  id: 41956,
  name: 'Plumise',
  nativeCurrency: {
    decimals: 18,
    name: 'PLM',
    symbol: 'PLM',
  },
  rpcUrls: {
    default: {
      http: ['https://node-1.plumise.com/rpc'],
      webSocket: ['wss://node-1.plumise.com/ws'],
    },
  },
  blockExplorers: {
    default: { name: 'Plumscan', url: 'https://scan.plumise.com' },
  },
})

export const plumiseTestnet = defineChain({
  id: 419561,
  name: 'Plumise Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'PLM',
    symbol: 'PLM',
  },
  rpcUrls: {
    default: {
      http: ['https://node-1.plumise.com/testnet/rpc'],
      webSocket: ['wss://node-1.plumise.com/testnet/ws'],
    },
  },
  blockExplorers: {
    default: { name: 'Plumscan Testnet', url: 'https://testnet-explorer.plumise.com' },
  },
  testnet: true,
})
