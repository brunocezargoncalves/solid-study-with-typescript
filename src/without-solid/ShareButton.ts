export default class ShareButton {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    bind(className: string, socialNetwork: string) {
        let link: string;

        // Caso adicionemos mais redes sociais diretamente (novos IFs) modificaremos (AbstractShareButton)
        if(socialNetwork === "x") {
            link = `https://x.com/share?url=${this.url}`
        }
        if(socialNetwork == "facebook") {
            link = `https://facebook.com/sharer.php?url=${this.url}`
        }
        if(socialNetwork === "linkedin") {
            link = `https://linkedin.com/shareArticle?url=${this.url}`
        }

        // Não precisa ser de responsabilidade da classe (EventHandler)
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener("click", () => window.open(link));
        }
    }
}