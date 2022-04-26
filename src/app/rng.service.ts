export class Rng {
  public static generate(max: number): number {
    return Math.floor(Math.random() * max);
  }

  public static flip(): boolean {
    return Math.random() > 0.5;
  }
}
