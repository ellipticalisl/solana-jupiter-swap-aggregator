export interface LimitOrderParams {
  orderId: string;
  maker: string;
  inMint: string;
  outMint: string;
  inAmount: bigint;
  targetPriceRatio: number; // minimum outAmount / inAmount ratio
  expiresAt: number;
}

export class SolanaLimitOrderEngine {
  private activeOrders: Map<string, LimitOrderParams> = new Map();

  public placeOrder(order: LimitOrderParams): void {
    if (order.inAmount <= 0n) {
      throw new Error('inAmount must be positive');
    }
    if (order.targetPriceRatio <= 0) {
      throw new Error('targetPriceRatio must be positive');
    }
    this.activeOrders.set(order.orderId, order);
  }

  public shouldTrigger(orderId: string, currentMarketRatio: number): boolean {
    const order = this.activeOrders.get(orderId);
    if (!order) return false;
    return currentMarketRatio >= order.targetPriceRatio;
  }

  public getActiveCount(): number {
    return this.activeOrders.size;
  }
}
