import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { IDish } from 'src/app/types/types';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  // dishes: Array<IDish> = [
  //   {
  //     _id: "62535e234e60cd8fc0b1162e",
  //     nom: "Beignet",
  //     id_restaurant: "625337f04e60cd8fc0b11604",
  //     cout: 13000,
  //     prix: 20000,
  //     img: "2.jpg"
  //   },
  //   {
  //     _id: "62535e234e60cd8fc0b1162b",
  //     nom: "Frite salade",
  //     id_restaurant: "625337f04e60cd8fc0b11606",
  //     cout: 12000,
  //     prix: 16000,
  //     img: "1.jpg"
  //   },
  //   {
  //     _id: "62535e234e60cd8fc0b1162d",
  //     nom: "Kisoa",
  //     id_restaurant: "625337f04e60cd8fc0b11605",
  //     cout: 13000,
  //     prix: 20000,
  //     img: "2.jpg"
  //   },
  //   {
  //     _id: "62535e234e60cd8fc0b1162c",
  //     nom: "Ravitoto sy Hena-kisoa",
  //     id_restaurant: "625337f04e60cd8fc0b11606",
  //     cout: 13000,
  //     prix: 20000,
  //     img: "2.jpg"
  //   }
  // ]
  dishes: Array<IDish> | undefined
  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    this.produitService.produits().subscribe({
      next: (metadata: any) => {
        console.log('metadata', metadata);
        this.dishes = metadata.data;
      },
      error: (e) => console.error(e),
    });
  }

}
