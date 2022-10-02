import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './components/ActualiteComponent/actualite/actualite.component';
import { EntrainementComponent } from './components/EntrainementComponent/entrainement/entrainement.component';
import { InscriptionComponent } from './components/InscriptionComponent/inscription/inscription.component';
import { QuiSommesNousComponent } from './components/QuiSommesNousComponent/qui-sommes-nous/qui-sommes-nous.component';
import { HomeComponent } from './components/HomeComponent/home/home.component';
import { PubliciteComponent } from './components/PubliciteComponent/publicite/publicite.component';
import { ConnexionComponent } from './components/ConnexionComponent/connexion/connexion.component';
import { CotisationComponent } from './components/CotisationComponent/cotisation/cotisation.component';
import { ChatComponent } from './components/ChatComponent/chat/chat.component';
import { ContactComponent } from './components/ContactComponent/contact/contact.component';
import { OrientationComponent } from './components/OrientationComponent/orientation/orientation.component';
import { CvComponent } from './components/CvComponent/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    EntrainementComponent,
    InscriptionComponent,
    QuiSommesNousComponent,
    HomeComponent,
    PubliciteComponent,
    ConnexionComponent,
    CotisationComponent,
    ChatComponent,
    ContactComponent,
    OrientationComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
