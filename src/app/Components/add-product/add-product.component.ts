import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { ItemService } from '../../Service/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productArray: any = []


  constructor(private service: ItemService, private router: Router, private route:ActivatedRoute ) { }
  
  addProduct = new FormGroup({
    name: new FormControl('', Validators.required),
    quantity: new FormControl('', [Validators.required,]),
    price: new FormControl('', Validators.required)
  });
 editUserId!:string;
  ngOnInit()
  {
    this.editUserId =this.route.snapshot.params['id'];
    console.log(this.editUserId);
    if(this.editUserId)
    {
      this.service.getProductById(this.editUserId).subscribe(res=>{
        this.addProduct.patchValue(res);
        
      })
    }
  }
  addItem()
  {
    console.log(this.addProduct.value);
      //Create Products
  this.service.createProducts(this.addProduct.value).subscribe(res=>{
    alert("Product Added");
     console.log(res);
     this.router.navigateByUrl('/product');
  });
  }
  updateData()
  {
    this.service.updateProduct(this.editUserId,this.addProduct.value).subscribe(res=>{
      alert("Product Updated");
       console.log(res);
       this.router.navigateByUrl('/product');
    });
  }

}
