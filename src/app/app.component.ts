import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    product: Product;

    constructor(){
        this.product = new Product(
            'Nice hat',
            'a black bold nice hat',
            '../assets/images/products/black-hat.jpg',
            ['Men', 'Accesories', 'Hats'],
            29.99);
    }
}
