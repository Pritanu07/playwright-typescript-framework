import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class CheckoutService {

  constructor(
    private inventory: InventoryPage,
    private cart: CartPage,
    private checkout: CheckoutPage
  ) {}

  async completePurchase(productId: string) {
    await this.inventory.addToCart(productId);
    await this.inventory.openCart();

    await this.cart.verifyCartPage();
    await this.cart.checkout();

    await this.checkout.fillDetails('Test', 'User', '12345');
    await this.checkout.finishOrder();
    await this.checkout.verifySuccess();
  }
}