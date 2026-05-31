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

```text
pages/        → Page Object Model (UI layer)
tests/        → UI + API test cases
api/          → API automation layer
fixtures/     → Test setup and dependency injection
utils/        → Helper functions
postman/      → Newman collections
Assets/       → Reports and screenshots


⚙️ Tech Stack
Playwright
TypeScript
Node.js
Postman + Newman
GitHub Actions (CI/CD)
🧰 Design Patterns
Page Object Model (POM)
Fixture-based architecture
API client abstraction
Separation of UI and API layers

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