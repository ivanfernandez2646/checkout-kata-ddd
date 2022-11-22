Feature: Create a new item
    In order to have items in the platform
    I want to create a new item
    Given I have the following discounts in the platform
            | id                                   | threshold | amount |
            | 7b45f2ac-e8fd-4d5b-a2be-4f318cb415be | 2         | 5.99   | 

    Scenario: A valid non existing item
        When I send a PUT request to "/items/A" with body:
        """
        {
        "price": "2"
        }
        """
        Then the response status code should be 201
        And the response should be empty

    Scenario: A valid non existing item with discount
        When I send a PUT request to "/items/B" with body:
        """
        {
        "price": "2",
        "discountId": "7b45f2ac-e8fd-4d5b-a2be-4f318cb415be"
        }
        """
        Then the response status code should be 201
        And the response should be empty
    
    Scenario: A non valid existing item
        Given I have the following items in the platform
            | id  | price  | discountId                              |
            | Z   | 3      | 7b45f2ac-e8fd-4d5b-a2be-4f318cb415be    | 
        When I send a PUT request to "/items/Z" with body:
        """
        {
        "price": "2",
        "discountId": "7b45f2ac-e8fd-4d5b-a2be-4f318cb415be"
        }
        """
        Then the response status code should be 409
        And the response should be empty

    @skip
    Scenario: Discount not found
        When I send a PUT request to "/items/C" with body:
        """
        {
        "price": "2",
        "discountId": "7b45f2ac-e8fd-4d5b-a2be-4f318cb415ba"
        }
        """
        Then the response status code should be 404
        And the response should be empty