import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewDetailsComponent } from './new-details/new-details.component';
const routes: Routes = [{
  path: '',
  component: NewsListComponent
}, {
  path: 'details/:id',
  component: NewDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
