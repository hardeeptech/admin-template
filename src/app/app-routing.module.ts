import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablesPageComponent } from './tables-page/tables-page.component';


const routes: Routes = [
  { path:'home', component: DashboardPageComponent},
  { path: 'tables', component: TablesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
