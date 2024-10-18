import ShareButton from "./ShareButton";

const shareButton = new ShareButton("https://www.linkedin.com/in/brunocezargoncalves/");
shareButton.bind(".btn-x", "x");
shareButton.bind(".btn-facebook", "facebook");
shareButton.bind(".btn-linkedin", "linkedin");