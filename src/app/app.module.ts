import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { LichsuComponent } from './phongtro/lichsu/lichsu.component';
import { HomepageComponent } from './phongtro/homepage/homepage.component';
import { HomepagemainComponent } from './phongtro/homepagemain/homepagemain.component';
import { ThuephongComponent } from './phongtro/thuephong/thuephong.component';
import { RegisterLoginComponent } from './phongtro/register-login/register-login.component';
import { LoginComponent } from './phongtro/login/login.component';
import { ChitietphongtroComponent } from './phongtro/chitietphongtro/chitietphongtro.component';
import { TimoghepComponent } from './phongtro/timoghep/timoghep.component';
import { ChitietoghepComponent } from './phongtro/chitietoghep/chitietoghep.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LichsuComponent,
    HomepageComponent,
    HomepagemainComponent,
    ThuephongComponent,
    RegisterLoginComponent,
    LoginComponent,
    ChitietphongtroComponent,
    TimoghepComponent,
    ChitietoghepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
