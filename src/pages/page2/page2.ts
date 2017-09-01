import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


// custom imports
import { Role } from './../../role';


@Role(false, 'Page3')
@IonicPage()
@Component({
    selector: 'page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    constructor(private navCtrl: NavController) {
        console.log('Page2#constructor');
    }
}