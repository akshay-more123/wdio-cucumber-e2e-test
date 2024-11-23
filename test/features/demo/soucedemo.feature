Feature: Inventory

   # @demo
    Scenario Outline: Demo Inventory
        Given As a standard user I login to inventory web app
        When Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price


        Examples:
            | TestID     | NumberOfProducts |
            | INTV_TC001 |       6         |