import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service/cart-service.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart$ = this.cartService.cart$;
  totalItems$ = this.cartService.totalItems$;

  constructor(private cartService: CartService) {}

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
