import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JBlogSharedModule } from '../../shared';
import {
    // MyViewX01Service,
    // MyViewX01PopupService,
    MyViewX01Component,
    // MyViewX01DetailComponent,
    // MyViewX01DialogComponent,
    // MyViewX01PopupComponent,
    // MyViewX01DeletePopupComponent,
    // MyViewX01DeleteDialogComponent,

    myViewX01Route,
    // myViewX01PopupRoute,
} from './';

const ENTITY_STATES = [
    ...myViewX01Route  // ,
    // ...myViewX01PopupRoute,
];

@NgModule({
    imports: [
        JBlogSharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        MyViewX01Component,
        // MyViewX01DetailComponent,
        // MyViewX01DialogComponent,
        // MyViewX01DeleteDialogComponent,
        // MyViewX01PopupComponent,
        // MyViewX01DeletePopupComponent,
    ],
    entryComponents: [
        // MyViewX01Component,
        // MyViewX01DialogComponent,
        // MyViewX01PopupComponent,
        // MyViewX01DeleteDialogComponent,
        // MyViewX01DeletePopupComponent,
    ],
    providers: [
        // MyViewX01Service,
        // MyViewX01PopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JBlogMyViewX01Module {}
