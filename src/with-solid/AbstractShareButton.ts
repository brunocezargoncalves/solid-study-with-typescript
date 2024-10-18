import EventHandler from "./EventHandlerSOLID";

// Classe abstrata é incompleta
export default abstract class AbstractShareButton {
    eventHandler: EventHandler;
    className: string;

    constructor(eventHandler: EventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction();

    bind() {
        const action = this.createAction();        
        this.eventHandler.addEventListenerToClassName(this.className, "click", action);
    }
}