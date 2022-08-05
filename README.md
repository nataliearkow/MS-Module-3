# MS-Module-3
# User Story
* AS AN employee with access to sensitive data
* I WANT to randomly generate a password that meets certain criteria
* SO THAT I can create a strong password that provides greater security

# Acceptance Criteria
* GIVEN I need a new, secure password
* WHEN I click the button to generate a password
* THEN I am presented with a series of prompts for password criteria
* WHEN prompted for password criteria
* THEN I select which criteria to include in the password
* WHEN prompted for the length of the password
* THEN I choose a length of at least 8 characters and no more than 128 characters
* WHEN asked for character types to include in the password
* THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
* WHEN I answer each prompt
* THEN my input should be validated and at least one character type should be selected
* WHEN all prompts are answered
* THEN a password is generated that matches the selected criteria
* WHEN the password is generated
* THEN the password is either displayed in an alert or written to the page

# Goal
* Create a working random password generator with given prompts in Acceptance Criteria.

# Changes Made
Went through Acceptance Criteria and added necessary elements
* "Generate Password" button functions properly when user clicks it.
* Added requirements for password length (8 - 128).
* "Please Enter a Number!" appears when user does not put a valid number in the first prompt.
* In first prompt, "Cancel" allows user to exit.
* Added password options for numbers, symbols, lowercase letters, uppercase letters.
* Allow user to select which variables that they would like to use in password.
* Desired code shows in in the Password Generator box.

# Photo of Finished Code
<img width="1440" alt="Screen Shot 2022-08-04 at 7 48 07 PM" src="https://user-images.githubusercontent.com/109115351/182975366-e179896b-1e0e-4e7c-9ab1-d12228ef4ab1.png">
