import { ICreateScriptCommand } from "../types/ICreateScriptCommand";
declare class CreateScriptCommand implements ICreateScriptCommand {
    execute(value: string): Promise<void>;
}
export default CreateScriptCommand;
