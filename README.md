# 🚀 POM-Saucedemo – Playwright UI + API Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-45ba4b?style=for-the-badge&logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Testing-blue?style=for-the-badge&logo=typescript)
![CI/CD](https://img.shields.io/badge/CI/CD-GitHub%20Actions-orange?style=for-the-badge&logo=githubactions)


## 📌 Overview

This is a Playwright + TypeScript automation framework for **UI, API, and hybrid testing**.

It demonstrates practical QA automation skills including:
- UI automation using Playwright
- API testing using Playwright and Postman/Newman
- Page Object Model (POM) design
- Test framework structuring
- CI/CD integration using GitHub Actions
- Reporting (HTML, Trace, Video, Screenshots)


## 🧪 Test Coverage

### ✔ UI Automation
- Login functionality (valid and invalid)
- Product listing validation
- Cart operations
- Checkout flow
- Logout functionality


### ✔ API Automation
- GET API validation
- POST API testing
- Response validation
- Basic schema validation


### ✔ Hybrid Testing
- API data used for UI validation
- Cross-verification between UI and API layers


## 🏗️ Framework Structure
pages/        → Page Object Model (UI layer)
tests/        → UI + API test cases
api/          → API automation layer
fixtures/     → Test setup and dependency injection
utils/        → Helper functions
postman/      → Newman collections
Assets/       → Reports and screenshots



🏗️ Project Architecture


POM-saucedemo/
│
├── .github/workflows/        → CI/CD pipeline (GitHub Actions)
├── api/                      → API automation framework
│   ├── client/
│   ├── data/
│   ├── requests/
│   ├── tests/
│   └── utils/
│
├── pages/                   → Page Object Model (UI layer)
├── tests/                   → UI + Hybrid test cases
│   ├── smoke/
│   ├── regression/
│
├── fixtures/                → Test setup & hooks
├── postman/                 → Postman + Newman API tests
│   ├── collections/
│   ├── Environments/
│   └── scripts/
│
├── auth/                    → Authentication test states
├── services/                → Business logic layer
├── utils/                   → Helpers + Allure utilities
│
├── Assets/                  → Test report screenshots
├── docs/                    → (recommended for images)
│
├── playwright.config.ts
├── global-setup.ts
├── package.json
├── Jenkinsfile
└── README.md


⚙️ Tech Stack

Playwright
TypeScript
Node.js
Postman + Newman
GitHub Actions (CI/CD)
🧰 Design Patterns
Page Object Model (POM)

 HEAD

Fixture-based architecture
API client abstraction
Separation of UI and API layers


🧪 Test Coverage

✔ UI Automation (SauceDemo)
Login (valid & negative cases)
Product listing validation
Cart operations
Checkout flow
Logout functionality
✔ API Automation

Playwright API Layer:

GET Users
POST Login / Mock APIs
Response validation
Schema checks

Postman/Newman:

Login API
Get Users API
Data validation tests
Environment-based execution (dev / QA)
✔ Hybrid Testing (UI + API)

Example flow:

Fetch API users
Validate UI login flow
Cross-check data consistency

🧰 Design Patterns Used

Page Object Model (POM)
Service Layer Pattern
Fixture-based test injection
API client abstraction
Environment-based configuration


▶️ How to Run Tests

Install dependencies

npm install
Run all tests
npx playwright test
Run UI tests
npx playwright test tests
Run API tests
npx playwright test api/tests

View report
npx playwright show-report

📊 Reports

Playwright HTML Report
Execution summary
Screenshots on failure
Video recording (on failure)
Trace viewer support
Newman Report

Stored at:

postman/reports/newman-report.html
🔐 Authentication Strategy

Session reuse using:

storageState.json
Avoids repeated login
Improves execution speed
⚙️ CI/CD Pipeline

GitHub Actions includes:

Dependency installation
UI test execution
API test execution
Report generation
Artifact upload

📌 Key Features

Playwright UI automation framework
API testing integration
Hybrid testing approach
POM-based structure
CI/CD pipeline support
Debugging (Trace, Video, Screenshot)
Scalable framework design


🌐 Live Report

👉 https://pritanu07.github.io/playwright-typescript-framework/

👩‍💻 Author

Shanmugapriya Rajendran

QA Automation Engineer