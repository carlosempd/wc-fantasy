import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './draft.component';
import { MyTeamComponent } from './components/my-team/my-team.component';

const routes: Routes = [
  {
    path: '',
    component: DraftComponent
  },
  {
    path: 'my-team',
    component: MyTeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DraftRoutingModule { }
