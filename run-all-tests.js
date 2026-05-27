const { execSync } = require("child_process");

try {
  console.log("Running UI + API tests (Playwright)...");
  execSync("npx playwright test", { stdio: "inherit" });

  console.log("Running Postman (Newman) tests...");
  execSync("newman run postman/collection.json", { stdio: "inherit" });

  console.log("ALL TESTS COMPLETED SUCCESSFULLY");
} catch (err) {
  console.error("TEST EXECUTION FAILED");
  process.exit(1);
}