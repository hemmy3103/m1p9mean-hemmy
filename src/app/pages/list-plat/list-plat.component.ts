import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { IDish } from 'src/app/types/types';
import { BASE_URL } from 'src/environments/environment';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
  dishes: Array<IDish> | undefined
  dish: IDish | undefined
  showModal = false;

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
  toggleModal(dish:IDish): void {
    this.showModal = !this.showModal;
    this.dish = dish;
    console.log('this.showModal', this.showModal)
  }
  dishImage(img: string | undefined){
    return BASE_URL+'imgs/plats/'+img;
  }
}
