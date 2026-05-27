# 🧪 Playwright POM + API + Hybrid Automation Framework

## 🚀 Overview
This is a **full enterprise-level automation framework** built using Playwright with TypeScript.  
It supports:

- UI Automation (POM Design Pattern)
- API Automation (Request Layer)
- Hybrid UI + API Testing
- Fixtures (Custom Playwright Setup)
- Data-Driven Testing
- CI/CD Integration (GitHub Actions)
- Allure Reporting
- Screenshots & Video capture

---

## 🏗️ Architecture
POM-saucedemo/
│
├── tests/
│   ├── smoke/
│   │   ├── login.smoke.spec.ts
│   │   ├── cart.smoke.spec.ts
│   │
│   ├── regression/
│   │   ├── full.regression.spec.ts
│   │   ├── e2e.regression.spec.ts
│   │
│   ├── api/
│   │   ├── login.api.spec.ts
│   │   ├── users.api.spec.ts
│
├── pages/
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│
├── fixtures/
│   └── baseTest.ts
│
├── api/
│   ├── utils/
│   ├── data/
│
├── playwright.config.ts
├── package.json
├── run-all-tests.js
└── allure-results/

---

## ⚙️ Tech Stack

- Playwright
- TypeScript
- Node.js
- POM Design Pattern
- API Testing (Playwright Request)
- GitHub Actions
- Allure Reports

---

## 🧪 Test Types Covered

### ✔ UI Automation
- Login
- Product selection
- Cart validation
- Checkout flow
- Logout

### ✔ Negative Testing
- Invalid login
- Locked user
- Empty fields validation

### ✔ API Testing
- User creation (POST)
- API response validation

### ✔ Hybrid Testing
- UI + API combined validation flow

---

## ▶️ How to Run Tests

### Run all tests
```bash
npx playwright test