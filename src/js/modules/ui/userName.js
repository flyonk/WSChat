export default class userName {
    constructor(element) {
        this.element = element
    }

    set(name) {
        this.name = name;
        this.element.textContent = name;
    }

    get() {
        return this.name;
    }
}