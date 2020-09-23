import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablesPageComponent } from './tables-page/tables-page.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
    TopNavigationComponent,
    DashboardPageComponent,
    TablesPageComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    LayoutPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
