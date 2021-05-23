import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProduitModule } from '../models/produit/produit.module';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public url:string;
  constructor(private http:HttpClient) { 
    this.url="http://127.0.0.1:8000/api/produits/";
  }

  public getAll(): Observable<ProduitModule[]>{
    //console.log(this.http.get<CategorieModule[]>(this.url));
    return this.http.get<ProduitModule[]>(this.url);
  }
  public saveCategorie(produit: ProduitModule){
    return this.http.post<ProduitModule>(this.url ,produit);
  }
  public deleteCategorie(produit: ProduitModule){
    return this.http.delete(this.url  + produit.id,{responseType: 'text'});
  }
  public findById(id):Observable<ProduitModule>{
    return this.http.get<ProduitModule>(this.url+ id);
  }
  public updateCategorie(produit: ProduitModule){
    return this.http.put(this.url  + produit.id, produit );
  }
}
