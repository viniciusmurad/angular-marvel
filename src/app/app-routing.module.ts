import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from './guards/auth.guard'
import { AuthComponent } from './auth/auth.component'
import { MainComponent } from './main/main.component'
import { CharacterComponent } from './character/character.component'

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'main', component: MainComponent, canActivate: [AuthGuard] },
  {
    path: 'character/:id',
    component: CharacterComponent,
    canActivate: [AuthGuard],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
