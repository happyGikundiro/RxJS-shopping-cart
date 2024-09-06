import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  private totalItemsSubject = new BehaviorSubject<number>(0);
  totalItems$ = this.totalItemsSubject.asObservable();

  addToCart(product: Product) {
    const currentCart = this.cartSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === product.id);
    
    if (existingProduct) {
      alert('This item is already in the cart.');
    } else {
      const updatedCart = [...currentCart, product];
      this.cartSubject.next(updatedCart);
      this.totalItemsSubject.next(updatedCart.length);
      alert('Item added to the cart successfully!');
    }
  }

  removeFromCart(productId: number) {
    const currentCart = this.cartSubject.getValue();
    const updatedCart = currentCart.filter(item => item.id !== productId);
    this.cartSubject.next(updatedCart);
    this.totalItemsSubject.next(updatedCart.length);
  }

  clearCart() {
    this.cartSubject.next([]);
    this.totalItemsSubject.next(0);
  }
}
