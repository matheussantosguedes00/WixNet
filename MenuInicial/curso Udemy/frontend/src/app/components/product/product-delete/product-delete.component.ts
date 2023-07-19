import { HeaderService } from './../../template/header/header.service';
import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute, 
    private headerService:HeaderService){

      headerService.headerData={
        title:'Cadastro de Produtos',
        icon:'delete',
        routeUrl:'/products'
      }

     }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.productService.readById(+id).subscribe(product => {
        this.product = product;
      });
    }
  }
  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(() => {
      // Lógica adicional após a atualização do produto, se necessário
      this.productService.showMessage('Produto deletado com sucesso!')
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
