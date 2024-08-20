export default class ShareButton {
    url: string;

    constructor(url: string) {
        this.url = url;
    }

    bind(className: string, socialNetwork: string) {
        let link: string;

        if(socialNetwork === "x") {
            link = `https://x.com/share?url=${this.url}`
        }
        if(socialNetwork == "facebook") {
            link = `https://facebook.com/sharer.php?url=${this.url}`
        }
        if(socialNetwork === "linkedin") {
            link = `https://linkedin.com/shareArticle?url=${this.url}`
        }
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener("click", () => window.open(link));
        }
    }
}