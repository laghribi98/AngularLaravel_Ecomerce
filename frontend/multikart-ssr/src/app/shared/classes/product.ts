// Products
// export interface Product {
//     id?: number;
//     title?: string;
//     description?: string;
//     type?: string;
//     brand?: string;
//     collection?: any[];
//     category?: string;
//     price?: number;
//     sale?: boolean;
//     discount?: number;
//     stock?: number;
//     new?: boolean;
//     quantity?: number;
//     tags?: any[];
//     variants?: Variants[];
//     images?: Images[];
// }
// id:number;
//   nomProduit:string;
//   statut : boolean;
//   featured:boolean;
//   description:string;
//   sku:string;
//   prix:string;
//   prix_regulier:number;
//   prix_vente:number;
//   categorie_id:number;
//   new:boolean;
//   solde:boolean;
export interface Product {
    id?: number;
    nomProduit?: string;
    description?: string;
    statut ?: boolean;
    featured?:boolean;
    sku?:string;
    prix?:string;
    type?: string;
    prix_regulier?:number;
    prix_vente?:number;
    categorie_id?:number;
    title?:string;
    brand?: string;
    collection?: any[];
    category?: string;
    price?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];
    variants?: Variants[];
    images?: Images[];
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}