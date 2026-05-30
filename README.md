POM-Saucedemo – UI + API + Hybrid Automation Framework
🚀 Overview

This is a production-style QA automation framework built using:

🎭 Playwright (UI Automation)
🔗 API Testing (Playwright Request + Postman/Newman)
🧱 Page Object Model (POM)
🔄 Hybrid UI + API Testing
⚙️ CI/CD (GitHub Actions + Jenkins)
📊 Reporting (Playwright HTML + Allure + Newman)

It demonstrates real-world SDET / QA Automation Engineer skills.

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
Playwright (TypeScript)
Node.js
Postman + Newman
Allure Reporting
GitHub Actions
Jenkins (CI/CD)
Page Object Model (POM)
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
Run all UI tests
npx playwright test
Run smoke tests
npx playwright test tests/smoke
Run API tests (Playwright API layer)
npx playwright test api/tests
Run Postman API tests (Newman)
npm run test:api:report
📊 Reports
🎭 Playwright HTML Report
npx playwright show-report

Features:

Test execution status
Screenshots (failures)
Video recording
Trace viewer
📊 Allure Report

Generate:

allure generate allure-results --clean -o allure-report

Open:

allure open allure-report

📌 CI also uploads Allure results as artifacts

📡 Newman (Postman) Report

Stored locally:

postman/reports/newman-report.html

Or downloaded from GitHub Actions artifacts.

📸 Test Evidence (Portfolio Screenshots)

Stored in:

Assets/reports-screenshots/

Includes:

Playwright report screenshot
Allure dashboard screenshot
Newman report screenshot
🔄 CI/CD Pipeline
GitHub Actions

On every push:

✔ Install dependencies
✔ Run UI tests
✔ Run API tests
✔ Generate reports
✔ Upload artifacts

Artifacts include:

playwright-report
allure-results
newman-report
Jenkins (Optional CI)

Supports:

Build execution
Test runs
Integration validation
🔐 Authentication Strategy

Located in:

auth/

Supports:

standard user
locked user
admin user

Used for session-based testing via:

storageState.json
📊 Key Features

✔ Scalable automation framework
✔ UI + API hybrid testing
✔ Real-world POM architecture
✔ CI/CD integration (GitHub + Jenkins)
✔ Allure + HTML + Newman reporting
✔ Screenshot, video, trace debugging
✔ Environment-based execution

🚀 Project Status
Feature	Status
UI Automation	✅ Complete
API Automation	✅ Complete
Postman/Newman	✅ Complete
CI/CD Pipeline	✅ Complete
Reporting	✅ Complete
Jenkins Integration	⚠️ Optional enhancement
🌐 Live Demo

👉 GitHub Pages (Reports / Dashboard):

https://pritanu07.github.io/playwright-typescript-framework/

👨‍💻 Author    Shanmugapriya

Built by QA Automation Engineer

Skills demonstrated:

Playwright Automation
API Testing
CI/CD Pipelines
Hybrid Framework Design
Real-world QA Engineering practices
