Feature: Register a new seller account
  As a user, I want to register as a seller on the marketplace and verify the registration process.

  Scenario: Successfully register as a seller
    Given the user is on the seller login page
    And the "Marketplace Vendor Login" page is displayed
    When the user clicks on registration link
    Then the Register As Seller form is displayed
    When the user fills in the registration form with the following data:
      | Field            | Value             |
      | First_Name       | John              |
      | Last_Name        | Doe               |
      | Email            | john.doe@test.com |
      | Shop_URL         | johndoe33           |
      | Password         | SecurePass123     |
    Then the fields accept the values
    When the user clicks the Next button
    Then the Select Vendor Group dropdown is displayed
    When the user selects "Retail Seller" in the Select Vendor Group dropdown
    Then the Vat No field is displayed
    When the user fills in the "Vat No" field with a unique value "8796756754"
    Then the field accepts the value
    When the user clicks the Create Account button
    Then the user is redirected to the seller dashboard page
    Then the user verifies the registration success message
    # And the user receives the following emails:
    #   | Email Type                     |
    #   | Welcome email                  |
    #   | Confirm your password email    |
    #   | You are registered with Libra Incentix email |
    # Then the created customer is removed via GraphQL

