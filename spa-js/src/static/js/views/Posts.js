import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Posts");
    }

    async getHTML() {
        return `<h1> Hey benvenido al Posts Page</h1>`;
    }
}