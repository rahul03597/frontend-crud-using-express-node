import { Component } from '@angular/core';
import { ItemService } from '../../Service/item.service';
import { CommonModule } from '@angular/common';
import {  RouterOutlet,Router } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, AddProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  productArray: any = [];
  constructor(private service: ItemService, private router: Router){   }

  ngOnInit(){
    // this.service.getProducts().subscribe(res=>{
    //   this.productArray = res;
    //   console.log(this.productArray);
    // });
    this.getItems();
}

//Get Products
getItems()
{
  this.service.getProducts().subscribe(res=>{
    this.productArray = res;
    console.log("data wale bhaiya"+JSON.stringify(this.productArray));
  });

};

viewProduct(item:any)

{
  this.router.navigate(['/view'],{queryParams:item});
}
//update product
editProduct(item:any)
{
  this.router.navigate(['/edit'],{queryParams:item});
}

//delete product
delete(id: string) {
  this.service.deleteProduct(id).subscribe(res=>{
    const ok=confirm("Are you sure you want to delete this item?");
    if(ok)
    {
      this.service.deleteProduct(id).subscribe(res=>{
        alert("Product Deleted");
        // this.productArray = this.productArray.filter((item: { _id: string; }) => item._id != id);
        // this.router.navigateByUrl('/product');
        this.getItems();
      });
      
    }

  });
}

}



