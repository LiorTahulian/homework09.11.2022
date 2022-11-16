import { Phone } from "./oldPhone.js";

export class AdvancedPhone extends Phone {
    #screenDisplay;
    refreshScreenRate;
    speakers;
    applications;
    constructor(manufacturer, series, model, cameraMP, screenDisplay, refreshScreenRate, speakers){
        super(manufacturer, series, model, cameraMP);
        this.#screenDisplay = screenDisplay;
        this.refreshScreenRate = refreshScreenRate;
        this.speakers = speakers;
        this.applications = ['Duolingo', 'YouTube', 'Spotify'];
    }

    ring() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can ring strong because his new ' + this.speakers + ' speakers.');
    }

    takePhotos() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can take pictures in medium quality because his ' + this.cameraMP + 'MP camera.');
    }

    watchVideos() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can stream movies because his new ' + this.#screenDisplay + ' screen and his ' + this.refreshScreenRate + 'Hz refresh screen in high quality.');
    }

    accessToInternet() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' has access to the internet.');
    }

    runApplications() {
       console.log('The phone ' + this.getSeries() + this.getModel() + ' can run applications like:');
        this.applications.forEach(x => {
            console.log(x);
        });
    }

    getScreenDisplay() {
        return this.#screenDisplay;
    }
}