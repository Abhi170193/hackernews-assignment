import { Component, OnInit } from '@angular/core';
import { NewService } from '../new.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  // On Particular page Limit of Item shown in Page is 30 and Page number is started from 0.
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
  /**
  * getNewList function is used to get new list which is shown in new page
  */
  getNewList() {
    this.newSrv.getLatestNews().subscribe(async (res: any) => {
      this.newsList = res
      if (this.newsList) {
        this.getNewDetails(this.newsList)
      }
    })
  }
  /**
   * GetNewsDetails function is used to get detail of new using Id and push into array and Pagination logic perform in it.
   * @param data is array of news list
   */
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
  /**
  * OnScroll function is used to perform infinite scroll
  */
  onScroll() {
    this.pageNumber = this.pageNumber + 1
    this.getNewDetails(this.newsList)
  }
  /**
  * RedirectToPage function is used to redirect on the detail route using condition
  * @param list details of news
  */
  redirectToPage(list: any) {
    if (list.url) {
      window.location.href = list.url;
    }
    else {
      this.router.navigate([`/details/${list.id}`])
    }
  }

}
