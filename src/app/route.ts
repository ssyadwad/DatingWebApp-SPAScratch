import {Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './Messages/Messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './MemberList/MemberList.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes:Routes=[
    {path:'',component:HomeComponent},
    {
        path:'',
        runGuardsAndResolvers:'always',
        canActivate:[AuthGuard],
        children:[
            {path:'messages',component:MessagesComponent},
            {path:'members',component:MemberListComponent},
            {path:'lists',component:ListsComponent}
        ]
    },
    
    {path:'**',redirectTo:'',pathMatch:'full'}
]