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
import { ChitietphongtroComponent } from './phongtro/chitietphongtro/chitietphongtro.component';
import { TimoghepComponent } from './phongtro/timoghep/timoghep.component';
import { ChitietoghepComponent } from './phongtro/chitietoghep/chitietoghep.component';
import { TintucComponent } from './phongtro/tintuc/tintuc.component';
import { DanhsachyeuthichComponent } from './phongtro/danhsachyeuthich/danhsachyeuthich.component';
import { QuanlybaidangComponent } from './phongtro/quanlybaidang/quanlybaidang.component';
import { RegisterComponent } from './phongtro/register/register.component';
import { DuyetdonlamchutroComponent } from './phongtro/duyetdonlamchutro/duyetdonlamchutro.component';
import { DanhsachnguoidungComponent } from './phongtro/danhsachnguoidung/danhsachnguoidung.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { MatIconModule } from '@angular/material/icon';
import { MenuComponent } from './phongtro/menu/menu.component';
import { NavbarUserComponent } from './phongtro/navbar-user/navbar-user.component';
import { HttpClientModule } from '@angular/common/http';
import { UIUserComponent } from './phongtro/uiuser/uiuser.component';
import { UIAdminComponent } from './phongtro/uiadmin/uiadmin.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    LichsuComponent,
    HomepageComponent,
    HomepagemainComponent,
    ThuephongComponent,
    ChitietphongtroComponent,
    TimoghepComponent,
    ChitietoghepComponent,
    TintucComponent,
    DanhsachyeuthichComponent,
    QuanlybaidangComponent,
    RegisterComponent,
    DuyetdonlamchutroComponent,
    DanhsachnguoidungComponent,
    MenuComponent,
    NavbarUserComponent,
    UIUserComponent,
    UIAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    MatSliderModule,
    MatMenuModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormField,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
