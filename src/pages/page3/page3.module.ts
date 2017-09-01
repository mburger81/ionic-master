import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page3 } from './page3';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        IonicPageModule.forChild(Page3)
    ],
    declarations: [
        Page3
    ],
    entryComponents: [
        Page3
    ]
})
export class Page3Module { }