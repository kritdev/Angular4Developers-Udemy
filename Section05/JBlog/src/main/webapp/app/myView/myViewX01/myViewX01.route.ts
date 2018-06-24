import { Routes } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { MyViewX01Component } from './myViewX01.component';
// import { PostDetailComponent } from './post-detail.component';
// import { PostPopupComponent } from './post-dialog.component';
// import { PostDeletePopupComponent } from './post-delete-dialog.component';

export const myViewX01Route: Routes = [
    {
        path: 'myViewX01',
        component: MyViewX01Component,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'My ViewX 01'
        },
        canActivate: [UserRouteAccessService]
    }
    // , {
    //     path: 'post/:id',
    //     component: PostDetailComponent,
    //     data: {
    //         authorities: ['ROLE_USER'],
    //         pageTitle: 'Posts'
    //     },
    //     canActivate: [UserRouteAccessService]
    // }
];

export const postPopupRoute: Routes = [
    // {
    //     path: 'post-new',
    //     component: PostPopupComponent,
    //     data: {
    //         authorities: ['ROLE_USER'],
    //         pageTitle: 'Posts'
    //     },
    //     canActivate: [UserRouteAccessService],
    //     outlet: 'popup'
    // },
    // {
    //     path: 'post/:id/edit',
    //     component: PostPopupComponent,
    //     data: {
    //         authorities: ['ROLE_USER'],
    //         pageTitle: 'Posts'
    //     },
    //     canActivate: [UserRouteAccessService],
    //     outlet: 'popup'
    // },
    // {
    //     path: 'post/:id/delete',
    //     component: PostDeletePopupComponent,
    //     data: {
    //         authorities: ['ROLE_USER'],
    //         pageTitle: 'Posts'
    //     },
    //     canActivate: [UserRouteAccessService],
    //     outlet: 'popup'
    // }
];
