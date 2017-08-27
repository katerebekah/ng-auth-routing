import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubpageComponent } from './subpage.component';
import { OtherpageComponent } from './otherpage.component';

import { AuthGuard } from './security/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: "subpage", component: SubpageComponent },
      { path: "otherpage", component: OtherpageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
