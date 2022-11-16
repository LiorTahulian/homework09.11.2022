import { AdvancedPhone } from "./advancedPhone.js";
import { Phone } from "./oldPhone.js";
import { SuperPhone } from "./superPhone.js";

let phone1 = new Phone('SAMSUNG', 'Galaxy', 'S3', 5);
console.log(phone1);
phone1.toCall();
phone1.ring();
phone1.takePhotos();

console.log('');
console.log('');

let advancedPhone1 = new AdvancedPhone('SAMSUNG', 'Galaxy', 'S10', 50, 'Q-LED', 90, 'Logitech');
console.log(advancedPhone1);
advancedPhone1.toCall();
advancedPhone1.ring();
advancedPhone1.takePhotos();
advancedPhone1.watchVideos();
advancedPhone1.accessToInternet();
advancedPhone1.runApplications();

console.log('');
console.log('');

let superPhone1 = new SuperPhone('SAMSUNG', 'Galaxy', 'S23', 200, 'O-LED', 144, 'JBL');
console.log(superPhone1);
superPhone1.ring();
superPhone1.takePhotos();
superPhone1.runApplications();