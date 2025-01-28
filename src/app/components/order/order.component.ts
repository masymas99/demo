import { Component, OnInit,Input, Output,OnChanges,EventEmitter, output } from '@angular/core';
import { Iorder } from './Iorder';
import { ShadowDirective } from '../directive/shadow.directive';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StatiCDataService } from '../Services/stati-cdata.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  imports: [ ShadowDirective,CurrencyPipe,FormsModule,RouterModule ]
})
export class OrderComponent implements OnChanges ,OnInit{

  // prolist:Iorder[];
  FilteratedList:Iorder[] = [];
  totalprice:number;
  @Input() SendCatID:number=0;
  @Input() SendCatName:string="";
  @Output() SendedTotalPrice = new EventEmitter<number>();
  count:number;
  buyit( p:Iorder, count:any){
    this.totalprice += p.price*count;
    this.SendedTotalPrice.emit(this.totalprice)
    p.quantity -= count;
  }


  constructor(private router: Router,private Staticdata:StatiCDataService) {
    this.count = 0;


    this.totalprice = 0;
    // this.FilteratedList = this.prolist;

    // OpenProuductDetails(id: number) {
    //   this.router.navigateByUrl(['/products/'+ id]);
    // }

  }
  ngOnInit(): void {
    this.FilteratedList = this.Staticdata.getAllPrds();
  }


  FilteratedByCatID() {
    // if (this.SendCatName ==="")  {
    //   this.FilteratedList = this.prolist
    // }
    // this.FilteratedList = this.prolist.filter((i) => i.category === this.SendCatName)
    this.FilteratedList = this.Staticdata.getPrdByCatId(this.SendCatName)
  }
  ngOnChanges(): void {
    this.FilteratedByCatID()
  }

  OpenPrdDetails(id: number) {
    //? programmatically routing
    this.router.navigateByUrl('/products/' + id)
  }

  DeletePrd(id:number){
    this.Staticdata.deletePrdById(id)
  }
  AddPrd(addForm:NgForm){
    let newPrd:Iorder = {
      id: addForm.value.id,
      description:addForm.value.description,
      name:addForm.value.name,
      price:addForm.value.price,
      quantity:addForm.value.quantity,
      category:addForm.value.category,
      imageUrl:addForm.value.imgURL
    }
    this.Staticdata.AddPrd(newPrd)
  }
}
