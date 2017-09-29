
declare const NAME: string;
declare const VERSION: string;
declare const USER: string;

declare const require: {
    <T = any>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T = any>(path: string) => T) => void) => void;
};
