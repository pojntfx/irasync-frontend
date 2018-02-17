import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// ng-bootstrap main module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarNavLeftComponent } from './components/navbar/navbar-nav-left/navbar-nav-left.component';
import { NavbarNavRightComponent } from './components/navbar/navbar-nav-right/navbar-nav-right.component';
import { CommunityHeaderComponent } from './components/header/community-header/community-header.component';
import { CommunityNavbarComponent } from './components/navbar/community-navbar/community-navbar.component';
import { CommunityNavbarNavLeftComponent } from './components/navbar/community-navbar/community-navbar-nav-left/community-navbar-nav-left.component';
import { CommunityNavbarNavRightComponent } from './components/navbar/community-navbar/community-navbar-nav-right/community-navbar-nav-right.component';
import { FooterComponent } from './components/navbar/footer/footer.component';
import { FooterLeftComponent } from './components/navbar/footer/footer-left/footer-left.component';
import { FooterRightComponent } from './components/navbar/footer/footer-right/footer-right.component';
import { ContentCommunityComponent } from './components/content/content-community/content-community.component';
import { CardPostFeedComponent } from './components/card/card-post-feed/card-post-feed.component';
import { NavbarNavRightUserDropdownComponent } from './components/navbar/navbar-nav-right/navbar-nav-right-user-dropdown/navbar-nav-right-user-dropdown.component';
import { ContentPersonComponent } from './content/content-person/content-person.component';

const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id', component: HeroDetailComponent },
  {
    path: 'c/:name',
    component: ContentCommunityComponent,
  },
  {
    path: 'p/:name',
    component: ContentPersonComponent,
  },
  {
    path: '',
    redirectTo: '/c/feed',
    pathMatch: 'full',
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarNavLeftComponent,
    NavbarNavRightComponent,
    CommunityHeaderComponent,
    CommunityNavbarComponent,
    CommunityNavbarNavLeftComponent,
    CommunityNavbarNavRightComponent,
    FooterComponent,
    FooterLeftComponent,
    FooterRightComponent,
    ContentCommunityComponent,
    CardPostFeedComponent,
    NavbarNavRightUserDropdownComponent,
    ContentPersonComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
