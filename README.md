### Bank Tech Test - Node.js

A small project designed to highlight my code quality and process. [source](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)

It allows you to create an account, deposit, withdraw, and print statements.

## To run 

1. Clone this repo.

2. Install dependencies with:

   ```shell
   npm install
   ```

3. Run tests with:

   ```shell
   npm test
   ```

4. Run the Node REP:

   ```js
   node
   ```

5. Require `account.js`:

   ```js
   const Account = require("./src/account.js")
   ```

6. Create an account with:

   ```js
   let account = new Account();
   ```

7. Use the account with the following methods:

| Function                     | Description                                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| `account.deposit(number)`  | deposit however much you want into your account, this figure is in pounds with pence as decimals.  |
| `account.withdraw(number)` | withdraw however much you want from your account, this figure is in pounds with pence as decimals. |
| `account.statement()`      | prints a statement of all transactions so far                                                      |

## Example Screenshot

![Example Screenshot](images/Bank_Tech_Test_Example_Screenshot.png)

## Approach 

### Project Setup

Decided to use Jasmine as it's a simple testing framework to use, and can be used with Istanbul to check testing coverage.

### Project Plan

Identified 3 clear classes:

1. Account (will hold the balance, a record of interactions, be used for requesting a statement)

2. Interaction (will hold a single interaction, including the action, post action balance and date of interaction)

3. Statement (will be used to print the Account data)

### Account

Began with the data that would be stored in the constructor, a balance at 0 and an empty array to hold the record of interactions. Before writing any code, I wrote tests on functions that would return these values, and then implemented the code to make the tests pass.

I then moved on to the deposit and withdraw functions, testing that these would reduce/add to the balance appropriately. 

I created a simple class in the test file to mock the interaction class that would be created on Withdraw or Deposit as I was simply testing that instances of these mocks would be pushed to the records array in the Account class.

### Interaction

I originally considered using individual classes for Withdraw and Deposit, however upon writing a Deposit class, I realised they would duplicate the majority of their code so refactored Deposit into one Interaction class.

I only wanted this class to hold the date of interaction, the new balance, and the amount deposited or withdrawn. All of which were passed in as arguments on construction, therefore testing was simple apart from the date as I wanted to use the date on creation. I searched for an easy to use module to mock the date and decided to use mockdate.

### Statement
 
The Statement class was the most difficult to understand how it would work. I knew I would have an array in the constructor that would already hold the headers for the output, and decided that the record of Interactions would be passed as an argument. 

I used TDD to get the string outputs from the interactions in terms of whether it was in the credit or debit columns on the output.

I then used a separate function to format the date and called that in the print deposit & withdraw functions.

I mocked the Interaction by creating mock classes for the tests with the 3 functions I needed, and creating one for Withdraw and Deposit so I could test both versions on Interaction.

### Personal Review

Upon completion, I realised that I wasn't testing that the statement was printed in descending order, as I had both Withdraw and Deposit classes using the same dates. I therefore changed the dates in the deposit class so it should appear first, and refactored my tests and then code to match this requirement.

My manual test wasn't coming with any output as I wasn't console logging the output from Account.printStatement(). Therefore I added the console.log functionality to the Statement class.
