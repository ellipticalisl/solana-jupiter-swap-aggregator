# Solana Jupiter Swap Aggregator

![Banner](assets/banner.svg)

[![License](https://img.shields.io/badge/license-Apache--2.0-blue.svg)](LICENSE)
[![Solana](https://img.shields.io/badge/Solana-Web3.js-9945FF?logo=solana)](https://solana.com)
[![Jupiter](https://img.shields.io/badge/Jupiter-v6%20API-FBA43A)](https://jup.ag)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)

> **A TypeScript DEX swap aggregator and routing engine executing optimal trade paths across Orca, Raydium, and Meteora on Solana.**

---

## 🌟 Key Features

- **Multi-DEX Liquidity Splitting**: Distributes large orders across multiple AMMs (Orca Whirlpools, Raydium CLMM) to minimize price impact.
- **Slippage Protection Calculator**: Strictly asserts mathematical minimum-received thresholds down to basis points (bps).
- **Zod Schema Runtime Validation**: Hardens API payload boundaries and mint address constraints before building on-chain swap transactions.
- **Unit Tested**: Vitest automated test suite ensuring correct slippage boundaries and route distribution.

---

## 🚀 Quick Start

### Installation & Test

```bash
npm install
npm run test
npm run build
```

---

## 📄 License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.