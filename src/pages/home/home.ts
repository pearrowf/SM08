import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {


    constructor(public navCtrl: NavController, ) {

    }
    launchMap(class1, class2, class3, class4, class5, class6, class7, class8) {
        class1 = class1 || 'no class entered';
        class2 = class2;
        class3 = class3;
        class4 = class4;
        class5 = class5;
        class6 = class6;
        class7 = class7;
        class8 = class8;




        this.navCtrl.push(AboutPage, {
            clas1: class1,
            clas2: class2,
            clas3: class3,
            clas4: class4,
            clas5: class5,
            clas6: class6,
            clas7: class7,
            clas8: class8,
        });
    }
}

