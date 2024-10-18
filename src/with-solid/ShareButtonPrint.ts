import EventHandler from "./EventHandlerSOLID";
import AbstractShareButton from "./AbstractShareButton";

// Classe concreta que implementa a abstração
export default class ShareButtonX extends AbstractShareButton {

    constructor(eventHandler: EventHandler, className: string) {
        super(eventHandler, className);
    }

    createAction() {
        return () => window.print();
    }
}