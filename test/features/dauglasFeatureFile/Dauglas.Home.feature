Feature: Login Page Actions

  Background:
    Given I open the login page and I accept the cookies
    When I click on perfume section
    #Then I should be on the homepage

  @demo
  Scenario:<TestID>: Selecting and verifying flags checkboxes
    When I open the 'flags' dropdown
    And I select the 'Sale' checkbox
    # Then the 'Sale' checkbox should be checked
    When I select the 'NEU' checkbox
    # Then the 'NEU' checkbox should be checked
    When I select the 'Limitiert' checkbox
    # Then the 'Limitiert' checkbox should be checked
    Examples:
      | TestID     |
      | INTV_TC001 |
  # Scenario: Navigating to the Parfum section
  #   Given I am on the homepage
  #   When I go to the Parfum section
  #   Then I should be in the Parfum section
  # Scenario: Selecting flag options
  #   Given I am on the homepage
  #   When I select the flag options "Option 1" and "Option 2"
  #   Then the selected options should be applied
