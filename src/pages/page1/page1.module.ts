import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page1 } from './page1';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        IonicPageModule.forChild(Page1)
    ],
    declarations: [
        Page1
    ],
    entryComponents: [
        Page1
    ]
})
export class Page1Module { }