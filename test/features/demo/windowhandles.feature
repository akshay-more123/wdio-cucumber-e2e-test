Feature: multiple Window handle

  #@demo
  Scenario Outline: multiple active window handling
    Given A web page is opened
    When click on new window
    #Then click on child windo element
    #Then back to parent window

    Examples:
      | TestID    |
      | WEB_TC002 |
