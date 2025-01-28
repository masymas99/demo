import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatiCDataService } from '../Services/stati-cdata.service';
import { Iorder } from '../order/Iorder';

@Component({
  selector: 'app-OrderDetails',
  templateUrl: './OrderDetails.component.html',
  styleUrls: ['./OrderDetails.component.css']
})
export class OrderDetailsComponent implements OnInit {
DeletePrd(arg0: any) {
throw new Error('Method not implemented.');
}
  id:number = 0;
  product:Iorder|null = null


  constructor(private activerouter:ActivatedRoute, private staticData:StatiCDataService) {
    this.id = Number(this.activerouter.snapshot.paramMap.get('id'));//activerouter.route.snapshot.params[]
  }

  ngOnInit() {
    this.product = this.staticData.getPrdByID(this.id);
  }

}
