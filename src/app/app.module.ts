import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';

// Enable PWA support
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

// ng-bootstrap main module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Routes
import { CommunityComponent } from './routes/community/community.component';
import { PersonComponent } from './routes/person/person.component';

// Components
import { NavigationMainComponent } from './components/header/navigation/main/navigation-main/navigation-main.component';
import { NavigationCommunityComponent } from './components/header/navigation/community/navigation-community/navigation-community.component';
// tslint:disable-next-line:max-line-length
import { NavigationCommunityEndComponent } from './components/header/navigation/community/navigation-community-end/navigation-community-end.component';
// tslint:disable-next-line:max-line-length
import { NavigationCommunityStartComponent } from './components/header/navigation/community/navigation-community-start/navigation-community-start.component';
import { NavigationMainStartComponent } from './components/header/navigation/main/navigation-main-start/navigation-main-start.component';
import { NavigationMainEndComponent } from './components/header/navigation/main/navigation-main-end/navigation-main-end.component';
import { HeaderCommunityComponent } from './components/header/header-community/header-community.component';
import { FooterMainComponent } from './components/footer/footer-main/footer-main/footer-main.component';
import { FooterMainStartComponent } from './components/footer/footer-main/footer-main-start/footer-main-start.component';
import { FooterMainEndComponent } from './components/footer/footer-main/footer-main-end/footer-main-end.component';
// tslint:disable-next-line:max-line-length
import { NavigationMainEndMenuUserComponent } from './components/header/navigation/main/navigation-main-end/navigation-main-end-menu-user/navigation-main-end-menu-user.component';
import { CardPostFeedComponent } from './components/content/card/card-post-feed/card-post-feed.component';
import { LoginComponent } from './routes/login/login.component';

// Apollo Client
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// To get user input
import { FormsModule } from '@angular/forms';

const isfRoutes: Routes = [
  // A community
  {
    path: 'c/:name',
    component: CommunityComponent,
  },
  {
    path: 'community/:name',
    component: CommunityComponent,
  },
  {
    path: 'r/:name',
    component: CommunityComponent,
  },
  // A person
  {
    path: 'p/:name',
    component: PersonComponent,
  },
  {
    path: 'person/:name',
    component: PersonComponent,
  },
  {
    path: 'u/:name',
    component: PersonComponent,
  },
  {
    path: 'user/:name',
    component: PersonComponent,
  },
  // Login
  {
    path: 'l',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  // Feed
  {
    path: '',
    redirectTo: '/c/feed',
    pathMatch: 'full',
  },
  // { path: '**', component: PageNotFoundComponent } // Will be added in the future
];

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    PersonComponent,
    NavigationMainComponent,
    NavigationCommunityComponent,
    NavigationCommunityEndComponent,
    NavigationCommunityStartComponent,
    NavigationMainStartComponent,
    NavigationMainEndComponent,
    HeaderCommunityComponent,
    FooterMainComponent,
    FooterMainStartComponent,
    FooterMainEndComponent,
    NavigationMainEndMenuUserComponent,
    CardPostFeedComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot(
      isfRoutes
    ),
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    // Apollo Client
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    // User input
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      // Connect to the API endpoint (the one for prisma, not the db!)
      link: httpLink.create({ uri: 'http://localhost:4000' }),
      cache: new InMemoryCache()
    });
  }
}
