export interface Env {
    readonly dbConnector: string;
    readonly dbPort: number;
    readonly dbHost: string;
    readonly dbUsername?: string;
    readonly dbPassword?: string;
    readonly dbDatabase?: string;
    readonly dbPoolMin: number;
    readonly dbPoolMax: number;
    readonly dbDebug: boolean;
}