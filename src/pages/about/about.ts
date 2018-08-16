import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Component } from '@angular/core';


@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
})
export class AboutPage {
    clas1: any;
    clas2: any;
    clas3: any;
    clas4: any;
    clas5: any;
    clas6: any;
    clas7: any;
    clas8: any;

    constructor(public navCtrl: NavController, navParams: NavParams) {
        this.clas1 = navParams.get('class1');
        this.clas2 = navParams.get('class2');
        this.clas3 = navParams.get('class3');
        this.clas4 = navParams.get('class4');
        this.clas5 = navParams.get('class5');
        this.clas6 = navParams.get('class6');
        this.clas7 = navParams.get('class7');
        this.clas8 = navParams.get('class8');


    }


    ionViewDidLoad() {
        console.log('ioniViewDidLoad AboutPage');
        if (this.clas1 == "1101") {
            console.log("If1");
            let per1 = document.getElementById('per1');
            per1.style.opacity = '1';
        } else {
            console.log("Else1");
            let per1 = document.getElementById('per1');
            per1.style.opacity = '0';
        }

        if (this.clas2 == "1102") {
            console.log("If2");
            let per2 = document.getElementById('per2');
            per2.style.opacity = '1';
        } else {
            console.log("Else2");
            let per2 = document.getElementById('per2');
            per2.style.opacity = '0';
        }

        if (this.clas3 == "1103") {
            console.log("If3");
            let per3 = document.getElementById('per3');
            per3.style.opacity = '1';
        } else {
            console.log("Else3");
            let per3 = document.getElementById('per3');
            per3.style.opacity = '0';
        }
        if (this.clas4 == "1104") {
            console.log("If4");
            let per4 = document.getElementById('per4');
            per4.style.opacity = '1';
        } else {
            console.log("Else4");
            let per4 = document.getElementById('per4');
            per4.style.opacity = '0';
        }

        if (this.clas5 == "1313") {
            console.log("If5");
            let per5 = document.getElementById('per5');
            per5.style.opacity = '1';
        } else {
            console.log("Else5");
            let per5 = document.getElementById('per5');
            per5.style.opacity = '0';
        }

        if (this.clas6 == "1301") {
            console.log("If6");
            let per6 = document.getElementById('per6');
            per6.style.opacity = '1';
        } else {
            console.log("Else6");
            let per6 = document.getElementById('per6');
            per6.style.opacity = '0';
        }
        if (this.clas7 == "1204") {
            console.log("If7");
            let per7 = document.getElementById('per7');
            per7.style.opacity = '1';
        } else {
            console.log("Else7");
            let per7 = document.getElementById('per7');
            per7.style.opacity = '0';
        }

        if (this.clas8 == "1407") {
            console.log("If8");
            let per8 = document.getElementById('per8');
            per8.style.opacity = '1';
        } else {
            console.log("Else8");
            let per8 = document.getElementById('per8');
            per8.style.opacity = '0';
        }
    }

}
