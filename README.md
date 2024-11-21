
<!-- To start a new Playwright project -->
npm init playwright@latest

<!-- To run test all tests under /tests folder -->
npx playwright test

npx playwright test --project=chromium --headed

<!-- To show the report -->
npx playwright show-report

<!-- To run the docker compose file the command is -->
docker-compose -f docker-compose.yml up
<!-- OR -->
docker build -t playwright-test . 
docker compose up

<!-- To run the code generate tool -->
npx playwright codegen
npx playwright codegen -o ./tests/codeGenAuto.spec.ts
npx playwright codegen --device="iPhone 11 Pro"
