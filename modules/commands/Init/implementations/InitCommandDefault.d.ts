import { IInitCommand } from "../types/IInitCommand";
declare class InitCommandDefault implements IInitCommand {
    private INITIAL_CONFIG;
    private runCommand;
    execute: (_path: string | undefined) => Promise<void>;
}
export default InitCommandDefault;
