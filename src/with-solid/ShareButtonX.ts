import EventHandler from "./EventHandlerSOLID";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

// Classe concreta que implementa a abstração
export default class ShareButtonX extends AbstractLinkShareButton {

    constructor(eventHandler: EventHandler, className: string, url: string) {
        super(eventHandler, className, url);
    }

    createLink(): string {
        return `https://x.com/intent/tweet?url=${this.url}`
    }
}