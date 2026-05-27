# 🧪 Playwright POM + API + Hybrid Automation Framework

## 🚀 Overview
This is a **production-style test automation framework** built using Playwright with TypeScript.

It demonstrates real-world QA engineering skills including:
- UI Automation using Page Object Model (POM)
- API Automation using Playwright Request
- Hybrid UI + API testing
- CI/CD integration using GitHub Actions
- HTML test reporting with Playwright Reporter
- Screenshots, Videos, and Trace debugging

---

## 🏗️ Architecture


POM-saucedemo/
│
├── tests/
│ ├── smoke/
│ ├── regression/
│ ├── api/
│
├── pages/
│ ├── LoginPage.ts
│ ├── InventoryPage.ts
│ ├── CartPage.ts
│
├── fixtures/
│ └── baseTest.ts
│
├── api/
│ ├── utils/
│ ├── data/
│
├── playwright.config.ts
├── package.json
└── test-results/


---

## ⚙️ Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- REST API Testing (Playwright Request)
- GitHub Actions CI/CD
- HTML Reporting

---

## 🧪 Test Coverage

### ✔ UI Automation
- Login functionality
- Product selection
- Cart validation
- Checkout flow
- Logout

### ✔ Negative Testing
- Invalid login validation
- Locked user validation
- Empty field validation

### ✔ API Testing
- Create user (POST)
- Get users (GET)
- Response validation

### ✔ Hybrid Testing
- UI + API combined workflows

---

## ▶️ How to Run Tests

### Run all tests
```bash
npx playwright test
Run specific suite
npx playwright test tests/smoke
npx playwright test tests/api
📊 Test Reports
📌 Playwright HTML Report (Primary Report)

After execution, open report:

npx playwright show-report

It includes:

Test execution results
Screenshots (on failure)
Video recording (on failure)
Trace viewer for debugging
📁 Test Artifacts (CI / GitHub Actions)

After pipeline execution:

playwright-report/
test-results/

Contains:

📸 Screenshots
🎥 Videos
🧵 Trace files
🎥 Debugging Features

Playwright automatically captures:

Screenshots → on failure
Videos → on failure
Traces → on retry failure

Stored in:

test-results/
🚀 CI/CD Pipeline (GitHub Actions)

Every push triggers:

✔ Install dependencies
✔ Run tests
✔ Generate reports
✔ Upload artifacts

🌐 Live Test Report (GitHub Pages)

👉 View Live Report here:
🔗 https://pritanu07.github.io/playwright-typescript-framework/

🎯 Project Highlights

✔ Scalable automation framework
✔ Real-world POM design pattern
✔ API + UI hybrid testing
✔ CI/CD pipeline integration
✔ Debugging support (screenshots, video, trace)
✔ Ready for QA portfolio & interviews

📌 Project Status

✅ Completed
✅ CI/CD integrated
✅ Reporting enabled
⚠️ GitHub Pages deployment in progress (fixing 404 issue)

🔗 Shanmugapriya

Built by QA Automation Engineer using Playwright + TypeScript

⭐ If you like this project, give it a star on GitHub