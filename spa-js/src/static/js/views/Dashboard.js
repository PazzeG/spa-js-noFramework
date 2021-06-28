import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHTML() {
        return `<h1> Hey benvenido al dasboard </h1>
        <a href="/posts" data-link>View new posts</a>`;
    }
}