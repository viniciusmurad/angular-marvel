import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component'
import { AuthComponent } from './auth/auth.component'
import { MainComponent } from './main/main.component'
import { CharacterComponent } from './character/character.component'
import { CardComponent } from './main/card/card.component';
import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    CharacterComponent,
    CardComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
