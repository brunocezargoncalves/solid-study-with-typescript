import AbstractShareButton from "./AbstractShareButton";
import ShareButtonX from "./ShareButtonX";
import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonPrint from "./ShareButtonPrint";
import EventHandlerDOM from "./EventHandlerDOM";
//import EventHandlerMock from "./EventHandlerMock";

const eventHander = new EventHandlerDOM();

// Caso queira testar outro manipulador de eventos, por exemplo, algo somente em ambiente de desenvolvimento
//const eventHander = new EventHandlerMock();

const x: AbstractShareButton = new ShareButtonX(eventHander, ".btn-x", "https://www.linkedin.com/in/brunocezargoncalves/");
x.bind();

const facebook: AbstractShareButton = new ShareButtonFacebook(eventHander, ".btn-facebook", "https://www.linkedin.com/in/brunocezargoncalves/");
facebook.bind();

const linkedin: AbstractShareButton = new ShareButtonLinkedIn(eventHander, ".btn-linkedin", "https://www.linkedin.com/in/brunocezargoncalves/");
linkedin.bind();

const print: AbstractShareButton = new ShareButtonPrint(eventHander, ".btn-print");
print.bind();