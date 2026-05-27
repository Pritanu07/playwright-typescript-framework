import { allure } from "allure-playwright";

export class AllureUtils {

  static attachScreenshot(name: string, buffer: Buffer) {
    allure.attachment(name, buffer, "image/png");
  }

  static attachText(name: string, content: string) {
    allure.attachment(name, content, "text/plain");
  }

}