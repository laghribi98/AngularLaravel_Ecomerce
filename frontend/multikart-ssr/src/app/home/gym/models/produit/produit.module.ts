import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images, Variants } from 'src/app/shared/classes/product';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProduitModule {
 // id`, `nomProduits`, `statut`, `featured`, `description`, `SKU`, `prix`, `prix_regulier`, `prix_vente`, `categorie_id`
  id:number;
  nomProduit:string;
  statut : boolean;
  featured:boolean;
  description:string;
  sku:string;
  prix:string;
  prix_regulier:number;
  prix_vente:number;
  categorie_id:number;
  new:boolean;
  solde:boolean;
  images:Images[];
  variants:Variants[];
}
