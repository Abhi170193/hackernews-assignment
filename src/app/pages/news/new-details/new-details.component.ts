import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NewService } from '../new.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {
  id: any;
  newsDetails: any = {}
  constructor(private activatedRoute: ActivatedRoute, private newSrv: NewService) { }

  ngOnInit(): void {
    //ActivatedRoute is used to get Param Id from the URL and fetch newsdetails according to the Id
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id')!);
      this.getNewDetails(this.id)
    })
  }
  getNewDetails(id: any) {
    this.newSrv.getNewsDetails(id).subscribe(resDetails => {
      if (resDetails) {
        this.newsDetails = resDetails
      }
    })
  }

}
