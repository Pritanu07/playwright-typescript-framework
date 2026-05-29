import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';

export class CheckoutService {

  constructor(
    private inventory: InventoryPage,
    private cart: CartPage,
    private checkout: CheckoutPage,
  ) {}

  async completePurchase(productIds: string[]) {

    // =========================
    // ADD PRODUCTS
    // =========================
    for (const productId of productIds) {
      await this.inventory.addProduct(productId);
    }

    await this.inventory.verifyCartBadgeCount(productIds.length);

    // =========================
    // CART FLOW
    // =========================
    await this.inventory.goToCart();

    await this.cart.verifyCartPage();
    await this.cart.proceedToCheckout();

    // =========================
    // CHECKOUT FLOW
    // =========================
    await this.checkout.fillDetails('Test', 'User', '12345');

    await this.checkout.finishOrder();
    await this.checkout.verifySuccess();
  }
}