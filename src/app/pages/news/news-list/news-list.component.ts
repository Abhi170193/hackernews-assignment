import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  pageNumber: any = 0
  pageLimit: any = 30
  newsList: any = []
  showNewsListData: any = []
  throttle = 0;
  distance = 0;
  constructor(private newSrv: NewService, private router: Router) { }

  ngOnInit(): void {
    this.getNewList()
  }
  getNewList() {
    this.newSrv.getLatestNews().subscribe(async (res: any) => {
      this.newsList = res
      if (this.newsList) {
        this.getNewDetails(this.newsList)
      }
    })
  }
  async getNewDetails(data: any) {
    let firstIndex: any = this.pageLimit * this.pageNumber
    let secondIndex: any = this.pageNumber === 0 ? this.pageLimit : this.pageLimit + this.pageNumber * this.pageLimit
    for (let i: any = firstIndex; i < secondIndex; i++) {
      await this.newSrv.getNewsDetails(data[i]).subscribe(resDetails => {
        if (resDetails) {
          this.showNewsListData.push(resDetails)
        }
      })
    }
  }
  onScroll() {
    this.pageNumber = this.pageNumber + 1
    this.getNewDetails(this.newsList)
  }
  redirectToPage(list: any) {
    console.log(list)
    if (list.url) {
      window.location.href = list.url;
    }
    else {
      this.router.navigate([`/details/${list.id}`])
    }
  }

}
