import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutWithNavbarComponent } from './components/layouts/layout-with-navbar/layout-with-navbar.component';
import { LayoutWithoutNavbarComponent } from './components/layouts/layout-without-navbar/layout-without-navbar.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutWithoutNavbarComponent,
    children: [{ path: '', component: LoginComponent }],
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: LayoutWithNavbarComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
