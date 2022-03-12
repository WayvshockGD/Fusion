/**
 * @example
 * // With object
 * class CommandExample extends Command<{ name: string } & { ...object }> {}
 *
 * interface ICommand extends CommandConstructData {
 *    aliases: string[];
 * }
 * 
 * // With type
 * class CommandExample extends Command<ICommand> {}
 */
export class Command<T extends CommandConstructData = { name: string }> {
    public constructor(public data: T) {}

    public run() {}
}

/**
 * Command construct data, required for extenstion
 */
export type CommandConstructData = {
    [key: string]: string | number | boolean;
} & {
    name: string;
}

export interface CommandExampleInterface extends CommandConstructData {
    enabled: boolean;
    description: string;
}

export class ExampleCommand extends Command<CommandExampleInterface> {
    public setup() {
        console.log(this.data.description);
    }
}