declare module "confetti-js" {
  type ConfettiShape = "circle" | "square" | "triangle" | "line";
  interface ConfettiSettings {
    target: string;
    max?: number;
    size?: number;
    animate?: boolean;
    respawn?: boolean;
    clock?: number;
    props?: ConfettiShape[];
    colors?: Array<Array<number>>;
    start_from_edge?: boolean;
    width?: number;
    height?: number;
    rotate?: boolean;
  }
  export default class ConfettiGenerator {
    constructor(confettiSettings: ConfettiSettings);
    render(): void;
    clear(): void;
  }
}
