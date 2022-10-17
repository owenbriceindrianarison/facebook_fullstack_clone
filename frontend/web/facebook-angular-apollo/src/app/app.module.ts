import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpLink } from 'apollo-angular/http'
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthenticationModule } from './authentication/authentication.module'
import { InMemoryCache } from '@apollo/client/core'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule,
    ApolloModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'api/graphql',
          }),
        }
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
