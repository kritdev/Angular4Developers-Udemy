import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { Account, LoginModalService, Principal } from '../shared';
import { PostService } from '../entities/post/post.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../entities/post/post.model';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: [
        'home.css'
    ]

})
export class HomeComponent implements OnInit {
    account: Account;
    modalRef: NgbModalRef;
    posts: Post[] = [];

    constructor(
        private principal: Principal,
        private loginModalService: LoginModalService,
        private eventManager: JhiEventManager,
        private postService: PostService
    ) {
    }

    ngOnInit() {
        this.principal.identity().then((account) => {
            this.account = account;
        });
        this.registerAuthenticationSuccess();

        this.loadAll();
    }

    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
            });
        });
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
    }

    loadAll() {
        console.log('loadAll()...');

        this.postService.query().subscribe(
            (res: HttpResponse<Post[]>) => {
                this.posts = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    private onError(error) {
        console.log('onError....');
    }
}
