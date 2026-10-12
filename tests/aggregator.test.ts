import { describe, it, expect } from 'vitest';
import { SolanaJupiterAggregator } from '../src/aggregator.js';

describe('SolanaJupiterAggregator', () => {
  const aggregator = new SolanaJupiterAggregator();

  it('correctly calculates minimum received with slippage protection', () => {
    const expectedOut = 10_000_000n;
    // 50 bps = 0.5% slippage -> 9,950,000
    const minOut = aggregator.calculateMinimumAmountOut(expectedOut, 50);
    expect(minOut).toBe(9_950_000n);

    // 100 bps = 1.0% slippage -> 9,900,000
    const minOut1Pct = aggregator.calculateMinimumAmountOut(expectedOut, 100);
    expect(minOut1Pct).toBe(9_900_000n);
  });

  it('simulates split liquidity routing for large trade volumes', () => {
    const res = aggregator.simulateBestRoute({
      inputMint: 'So11111111111111111111111111111111111111112',
      outputMint: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v', // USDC
      amount: 100_000_000_000n, // large trade
      slippageBps: 50,
    });

    expect(res.routePlan.length).toBe(2);
    expect(res.routePlan[0].percent).toBe(50);
    expect(res.routePlan[1].percent).toBe(50);
    expect(res.outAmount).toBeGreaterThan(0n);
  });
});
