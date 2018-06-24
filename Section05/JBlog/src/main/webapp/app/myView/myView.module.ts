import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JBlogMyViewX01Module } from './myViewX01/myViewX01.module';

@NgModule({
    imports: [
        JBlogMyViewX01Module
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JBlogMyViewModule {}
