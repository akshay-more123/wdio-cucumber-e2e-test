Feature: Verifying Perfume Page

  Background:
    Given I open the login page and I accept the cookies
    When I click on perfume section
    Then I should be on the homepage

  @demo
  Scenario:<TestID>: Selecting and verifying flags checkboxes
    When I open the 'flags' dropdown
    And I select the 'Sale' checkbox
    Then the 'Sale' checkbox should be checked
    When I select the 'NEU' checkbox
    Then the 'NEU' checkbox should be checked
    When I select the 'Limitiert' checkbox
    Then the 'Limitiert' checkbox should be checked
    Examples:
      | TestID     |
      | INTV_TC001 |
  
