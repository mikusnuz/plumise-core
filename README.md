# @plumise/core

[![npm version](https://img.shields.io/npm/v/@plumise%2Fcore)](https://www.npmjs.com/package/@plumise/core)

TypeScript SDK for the [Plumise](https://plumise.com) AI-native blockchain.

Provides chain definitions, contract ABIs, addresses, and utilities for building on Plumise.

## Install

```bash
npm install @plumise/core viem
```

## Quick Start

```typescript
import { createPlumiseClient, getAgentRegistry, formatPLM } from '@plumise/core'

// Create a client
const client = createPlumiseClient({ chain: 'mainnet' })

// Read contract data
const registry = getAgentRegistry(client.publicClient)
const agent = await registry.read.getAgent(['0x...'])
console.log('Agent status:', agent.status)

// Check balance
const balance = await client.publicClient.getBalance({ address: '0x...' })
console.log('Balance:', formatPLM(balance), 'PLM')
```

## With a Signer

```typescript
import { createPlumiseClient, getInferencePayment, parsePLM } from '@plumise/core'
import { privateKeyToAccount } from 'viem/accounts'

const account = privateKeyToAccount('0x...')
const client = createPlumiseClient({ chain: 'mainnet', account })

// Deposit PLM for inference credits
const payment = getInferencePayment(client.walletClient!)
await payment.write.deposit({ value: parsePLM('100') })
```

## What's Included

### Chains

Pre-configured [viem Chain](https://viem.sh/docs/chains/introduction) objects:

```typescript
import { plumise, plumiseTestnet } from '@plumise/core'
// Use with any viem or wagmi client
```

| Chain | ID | RPC |
|-------|-----|-----|
| `plumise` | 41956 | `https://plug.plumise.com/rpc` |
| `plumiseTestnet` | 419561 | `https://plug.plumise.com/rpc/testnet` |

### Contract Addresses

```typescript
import { addresses } from '@plumise/core'

addresses.mainnet.AgentRegistry    // '0xc9cf...'
addresses.mainnet.InferencePayment // '0x5bfb...'
addresses.mainnet.RewardPool       // '0x...1000'
addresses.mainnet.ChallengeManager // '0x0f21...'
```

### ABIs

All contract ABIs are exported as `const` assertions for full viem type inference:

```typescript
import { agentRegistryAbi, inferencePaymentAbi } from '@plumise/core'
```

### Contract Helpers

```typescript
import { getAgentRegistry, getRewardPool, getInferencePayment, getChallengeManager } from '@plumise/core'

const registry = getAgentRegistry(publicClient)           // mainnet
const registry = getAgentRegistry(publicClient, 'testnet') // testnet
```

### Utilities

```typescript
import { formatPLM, parsePLM, estimateInferenceCost, isProTier, PRO_TIER_MINIMUM } from '@plumise/core'

formatPLM(1000000000000000000n) // '1.0'
parsePLM('100')                 // 100000000000000000000n
estimateInferenceCost(5000)     // cost in wei for 5000 tokens
isProTier(parsePLM('100'))      // true (>= 100 PLM)
```

## Plumise Contracts

| Contract | Description |
|----------|-------------|
| **AgentRegistry** | Register AI agents, heartbeat, status management |
| **RewardPool** | Block reward distribution based on contribution scores |
| **InferencePayment** | PLM deposit/withdraw for AI inference (Free/Pro tiers) |
| **ChallengeManager** | Proof-of-work challenges for agents |

## Network Info

- **Native token**: PLM (18 decimals)
- **Block reward**: 10 PLM/block, halving every ~4 years
- **Inference cost**: 0.001 PLM per 1000 tokens
- **Pro tier**: Deposit >= 100 PLM
- **Explorer**: [scan.plumise.com](https://scan.plumise.com)

## License

MIT
