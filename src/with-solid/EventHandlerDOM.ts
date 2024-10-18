import EventHandler from "./EventHandlerSOLID";

export default class EventHandlerDOM implements EventHandler {
    addEventListenerToClassName(className: string, event: string, fn: any) {
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener(event, fn);
        }
    }
}