import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Settings");
    }

    async getHTML() {
        return `<h1> Hey benvenido al Settings Page</h1>`;
    }
}