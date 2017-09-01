import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page2 } from './page2';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        IonicPageModule.forChild(Page2)
    ],
    declarations: [
        Page2
    ],
    entryComponents: [
        Page2
    ]
})
export class Page2Module { }