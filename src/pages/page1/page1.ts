import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


// custom imports
import { Role } from './../../role';


@Role(true)
@IonicPage()
@Component({
    selector: 'page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    constructor(private navCtrl: NavController) {
        console.log('Page1#constructor');
    }
}