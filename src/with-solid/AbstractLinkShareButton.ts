import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandlerSOLID";

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(eventHandler: EventHandler, className: string, url: string) {
        super(eventHandler, className);
        this.url = url;
    }

    // As extensões que terão que implementar o método
    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }
}