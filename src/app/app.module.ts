import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarNavigationComponent } from './sidebar-navigation/sidebar-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablesPageComponent } from './tables-page/tables-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarNavigationComponent,
    TopNavigationComponent,
    DashboardPageComponent,
    TablesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
