export class Phone {
    manufacturer;
    #series;
    #model;
    cameraMP;
    constructor(manufacturer, series, model, cameraMP) {
        this.manufacturer = manufacturer;
        this.#series = series;
        this.#model = model;
        this.cameraMP = cameraMP;
    }

    toCall() {
        console.log('The phone ' + this.#series + this.#model + ' can call every number.')
    }

    ring() {
        console.log('The phone ' + this.#series + this.#model + ' can ring weakly.');
    }

    takePhotos() {
        console.log('The phone ' + this.#series + this.#model + ' can take pictures in low quality because his ' + this.cameraMP + 'MP camera.');
    }

    getSeries() {
        return this.#series;
    }

    getModel() {
        return this.#model;
    }

}