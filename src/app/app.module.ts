import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { HeaderComponent } from './views/components/header/header.component';
import { PokeHuntComponent } from './views/components/poke-hunt/poke-hunt.component';
import { PokeSelectComponent } from './components/poke-select/poke-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeHuntComponent,
    PokeSelectComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
