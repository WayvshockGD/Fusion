import Eris from "eris";
import { Util } from "../Util";

export class CommandUtil {
    public async createMessage(message: Eris.Message, content: Eris.MessageContent, files?: Eris.FileContent[]) {
        return await message.channel.createMessage(content, files).catch((err: Error) => {
            return Util.createCatchReason("CHANNEL_ERROR", err);
        });
    }
}