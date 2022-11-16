import { AdvancedPhone } from "./advancedPhone.js";

export class SuperPhone extends AdvancedPhone {
    slowMotion;
    games;
    constructor(manufacturer, series, model, cameraMP, screenDisplay, refreshScreenRate, speakers) {
        super(manufacturer, series, model, cameraMP, screenDisplay, refreshScreenRate, speakers);
        this.slowMotion = 'Slow Motion';
        this.games = ['Fruit ninja', 'Icy Tower', 'Temple Run'];
    }

    ring() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can ring very very strong and also play music because his new and upgraded ' + this.speakers + ' speakers.');
    }

    takePhotos() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can take pictures in superb quality because his ' + this.cameraMP + 'MP camera. Also, is has the option named ' + this.slowMotion + '.');
    }

    watchVideos() {
        console.log('The phone ' + this.getSeries() + this.getModel() + ' can stream movies because his new ' + this.getScreenDisplay() + ' screen and his ' + this.refreshScreenRate + 'Hz refresh screen in high quality. Also, it can stream in 8K.');
    }

    runApplications() {
       console.log('The phone ' + this.getSeries() + this.getModel() + ' can run applications like:');
        this.applications.forEach(x => {
            console.log(x);
        });
        console.log('And a lot of games like:');
        this.games.forEach(x => {
            console.log(x);
        });
    }
}