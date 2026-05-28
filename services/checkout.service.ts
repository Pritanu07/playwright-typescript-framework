import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export class CheckoutService {

  constructor(
    private inventory: InventoryPage,
    private cart: CartPage,
    private checkout: CheckoutPage
  ) {}

  async completePurchase(productIds: string[]) {

    // =========================
    // ADD PRODUCTS
    // =========================
    for (const productId of productIds) {
      await this.inventory.addProduct(productId);
    }

    // =========================
    // CART FLOW
    // =========================
    await this.inventory.goToCart();
    await this.cart.verifyCartPageIsDisplayed();
    await this.cart.proceedToCheckout();

    // =========================
    // CHECKOUT FLOW
    // =========================
    await this.checkout.fillDetails('Test', 'User', '12345');
    await this.checkout.finishOrder();
    await this.checkout.verifySuccess();
  }
}