import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


// custom imports
import { Role } from './../../role';


@Role(true)
@IonicPage()
@Component({
    selector: 'page3',
    templateUrl: 'page3.html'
})
export class Page3 {

    constructor(private navCtrl: NavController) {
        console.log('Page3#constructor');
    }
}