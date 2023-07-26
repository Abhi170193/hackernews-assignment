import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NewDetailsComponent } from './new-details/new-details.component';


@NgModule({
  declarations: [
    NewsListComponent,
    NewDetailsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    InfiniteScrollModule
  ]
})
export class NewsModule { }
