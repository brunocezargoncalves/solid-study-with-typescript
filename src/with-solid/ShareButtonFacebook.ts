import EventHandler from "./EventHandlerSOLID";
import AbstractLinkShareButton from "./AbstractLinkShareButton";

// Classe concreta que implementa a abstração
export default class ShareButtonX extends AbstractLinkShareButton {

    constructor(eventHander: EventHandler, className: string, url: string) {
        super(eventHander, className, url);
    }

    createLink(): string {
        return `https://www.facebook.com/sharer/sharer.php?u=${this.url}`
    }
}