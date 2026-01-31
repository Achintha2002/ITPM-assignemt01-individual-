# Assignment 1 - Singlish to Sinhala Automation
**Student ID**: IT3779570
**Repository**: https://github.com/Achintha2002/ITP-M-Assignment-01-.git

This project contains Playwright automation tests for the SwiftTranslator system (Option 1).

## Prerequisites
- Node.js (v14 or higher)
- npm

## Installation
1. Clone the repository (or download the source).
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running Tests
To run the automated tests:

```bash
npx playwright test
```

To view the report:

```bash
npx playwright show-report
```

## Structure
- `tests/assignment.spec.ts`: Main test script.
- `tests/test-data.ts`: Contains the test scenarios (Positive and Negative).
- `playwright.config.ts`: Configuration file.
