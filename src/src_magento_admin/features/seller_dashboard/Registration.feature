Feature: Verify the registration processe for the Seller

  @regression
  Scenario: Successfully register as a seller
    Given the user is on the seller login page
    Then the user clicks on registration link to seller registration form
    When the user fills in the registration form with the following data:
      | Field            | Value             |
      | First_Name       | John              |
      | Last_Name        | Doe               |
      | Email            | john.doe@test.com |
      | Shop_URL         | johndoe33           |
      | Password         | SecurePass123     |
    When the user clicks the Next button
    When the user selects "Retail Seller" in the Select Vendor Group dropdown
    Then the Vat No field is displayed
    When the user fills in the Vat No field with a unique value "8796756754"
    When the user clicks the Create Account button
    Then the user is redirected to the seller dashboard page
    Then the user verifies the registration success message
    # And the user receives the following emails:
    #   | Email Type                     |
    #   | Welcome email                  |
    #   | Confirm your password email    |
    #   | You are registered with Libra Incentix email |
    # Then the created customer is removed via GraphQL

