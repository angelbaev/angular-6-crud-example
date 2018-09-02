import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserListComponent} from "./user-list/user-list.component";
import {UserPreviewComponent} from "./user-preview/user-preview.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserEditComponent} from "./user-edit/user-edit.component";

const routes: Routes = [
    {
        path: '',
        component: UserListComponent,
    },
    {
        path: 'add',
        component: UserAddComponent,
    },
    {
        path: ':id/preview',
        component: UserPreviewComponent,
    },
    {
        path: ':id/edit',
        component: UserEditComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
