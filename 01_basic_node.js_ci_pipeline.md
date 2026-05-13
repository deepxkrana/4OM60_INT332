# Scenario 01: Basic Node.js CI Pipeline

## 1. Scenario

A company has a simple Node.js project. Whenever a developer pushes code to GitHub, the system should automatically:

1. Download the latest repository code.
2. Install Node.js.
3. Install dependencies.
4. Run automated test cases.

This is the most basic form of Continuous Integration.

---

## 2. Learning Objectives

After implementing this scenario, the student will be able to:

- Create a GitHub Actions workflow file.
- Understand the `.github/workflows/` directory.
- Use `push` as a workflow trigger.
- Use GitHub-hosted runners.
- Use marketplace actions such as `actions/checkout` and `actions/setup-node`.
- Run shell commands inside a workflow.

---

## 3. Required Tools

- GitHub account
- Git installed on system
- Node.js installed locally, optional but useful for testing
- Basic code editor such as VS Code

---

## 4. Project Structure

Create the following structure:

```text
node-ci-demo/
├── package.json
├── index.js
├── test.js
└── .github/
    └── workflows/
        └── node-ci.yml
```

---

## 5. Source Code

### `index.js`

```javascript
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### `test.js`

```javascript
const add = require("./index");

if (add(2, 3) === 5) {
  console.log("Test passed successfully");
} else {
  throw new Error("Test failed");
}
```

### `package.json`

```json
{
  "name": "node-ci-demo",
  "version": "1.0.0",
  "description": "Basic Node.js CI demo using GitHub Actions",
  "main": "index.js",
  "scripts": {
    "test": "node test.js"
  },
  "dependencies": {}
}
```

---

## 6. Workflow File

Create this file:

```text
.github/workflows/node-ci.yml
```

```yaml
name: Basic Node.js CI

on:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository code
        uses: actions/checkout@v4

      - name: Setup Node.js environment
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run test cases
        run: npm test
```

---

## 7. Step-by-Step Implementation

### Step 1: Create a new GitHub repository

Create a repository named:

```text
node-ci-demo
```

### Step 2: Clone the repository

```bash
git clone https://github.com/your-username/node-ci-demo.git
cd node-ci-demo
```

### Step 3: Add project files

Create `index.js`, `test.js`, and `package.json` using the code given above.

### Step 4: Create workflow directory

```bash
mkdir -p .github/workflows
```

### Step 5: Create workflow file

Create:

```text
.github/workflows/node-ci.yml
```

Paste the workflow YAML code.

### Step 6: Commit and push

```bash
git add .
git commit -m "Add basic Node.js CI workflow"
git push origin main
```

### Step 7: Check GitHub Actions

Go to:

```text
Repository → Actions → Basic Node.js CI
```

Open the latest workflow run.

---

## 8. Expected Output

The workflow log should show:

```text
Test passed successfully
```

The workflow status should be green.

---

## 9. Explanation of YAML

| YAML Part | Meaning |
|---|---|
| `name` | Name shown in GitHub Actions tab |
| `on: push` | Workflow runs whenever code is pushed |
| `jobs` | Collection of tasks to run |
| `test` | Job name |
| `runs-on: ubuntu-latest` | Uses GitHub-hosted Ubuntu runner |
| `actions/checkout@v4` | Downloads repository code into runner |
| `actions/setup-node@v4` | Installs Node.js |
| `run: npm install` | Installs dependencies |
| `run: npm test` | Runs test script |

---

## 10. Common Errors and Fixes

| Error | Reason | Fix |
|---|---|---|
| Workflow not visible | Wrong folder path | Put file inside `.github/workflows/` |
| `package.json not found` | Missing checkout step | Add `actions/checkout@v4` |
| `npm test` failed | Test script missing | Add test script in `package.json` |
| YAML syntax error | Wrong indentation | Use two spaces consistently |

---

## 11. Student Submission

Students should submit:

1. GitHub repository link.
2. Screenshot of workflow YAML file.
3. Screenshot of successful workflow run.
4. Short explanation of all workflow steps.

---

## 12. Viva Questions

1. Why is `actions/checkout@v4` required?
2. What is a GitHub-hosted runner?
3. What is the role of `on: push`?
4. What happens if `package.json` is missing?
5. Difference between `npm install` and `npm test`?
