import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CurrentMembersComponent } from './pages/current-members/current-members.component';
import { PastMembersComponent } from './pages/past-members/past-members.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MemberComponent } from './pages/member/member.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: HomeComponent },
    { path: 'members', redirectTo: 'current-members' },
    { path: 'current-members', component: CurrentMembersComponent },
    { path: 'past-members', component: PastMembersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'member/:username', component: MemberComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'not-found' },
];
