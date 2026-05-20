# Playwright SauceDemo Automation Framework

## Overview
This project is an end-to-end UI automation framework developed using Playwright with TypeScript following the Page Object Model (POM) design pattern.

The framework automates core SauceDemo functionalities including:
- Login
- Negative Login Validation
- Add to Cart
- Checkout Flow
- Logout Flow

The framework is designed with reusable components, fixtures, data-driven testing, and scalable test architecture.

## Tech Stack
- Playwright
- TypeScript
- Node.js

## Framework Features
- Page Object Model (POM)
- Reusable Fixtures
- Data-Driven Testing using JSON
- Cross-Browser Execution
- HTML Reporting
- Screenshot Capture on Failure
- Video Recording on Failure
- Trace Viewer for Debugging

## Test Scenarios Covered

### Positive Scenarios
- Valid Login
- Add Product to Cart
- Checkout Flow
- Logout Flow

### Negative Scenarios
- Locked User Login
- Invalid Username
- Invalid Password
- Empty Credentials

## Project Structure

project-root/
│
├── pages/
├── tests/
├── fixtures/
├── test-data/
├── playwright.config.ts
├── package.json
└── README.md


