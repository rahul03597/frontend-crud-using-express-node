import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
   private postUrl = "http://localhost:3000/api/products";
  

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.postUrl);
   
  }
  createProducts(product: any) {
    return this.http.post(this.postUrl, product);
   
  }

  updateProduct(id: any, product: any) {
    return this.http.put(`${this.postUrl}/${id}`, product);
   
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.postUrl}/${id}`);
 

  }

  getProductById(id: string) {
    // return this.http.get(`${this.postUrl}/${id}`);
    return this.http.get(`${this.postUrl}/get/product/${id}`);
  }
}
