import EventHandler from "./EventHandlerSOLID";

// Classe para testes utilizando o princípio "D"
export default class EventHandlerMock implements EventHandler {
    addEventListenerToClassName(className: string, event: string, fn: any) {
        console.log(className, event, fn);
    }
}