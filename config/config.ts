import * as dotenv from 'dotenv';

export abstract class ConfigServer {

    constructor(){
        const nodeNameEnv = this.createPathEnv(this.nodeEnv);
        dotenv.config({ path: nodeNameEnv });
    }

    public getEnvironment(key: string): string | undefined{
        return process.env[key]; // Ejemplo : getEnvironment('PORT') return 8000
    }

    public getNumberEnv(key: string): number{
        return Number(this.getEnvironment(key));
    }

    public get nodeEnv(): string {
        return this.getEnvironment('NODE_ENV')?.trim() || '';
    }

    public createPathEnv(path: string): string {
        const arrayEnv: string[] = ["env"];
        if (path.length > 0){
            const stringToArray = path.split(".");
            arrayEnv.unshift(...stringToArray);
        }
        return "." + arrayEnv.join(".");
    }
}