Feature: Get item
    In order to have items in the platform
    I want to get them
    Given I have the following discounts in the platform
        | id                                   | threshold | amount |
        | 9f23e398-7763-42fe-b5a6-2ad603fbce0c | 4         | 19.99   |


    Scenario: A valid existing item
        Given I have the following items in the platform
            | id  | price  | discountId                            |
            | B   | 40     | 9f23e398-7763-42fe-b5a6-2ad603fbce0c  | 
        When I send a GET request to "/items/B"
        Then the response status code should be 302
        And the response should match:
        """
        {
        "id": "B",
        "price": 40,
        "discountId": "9f23e398-7763-42fe-b5a6-2ad603fbce0c"
        }
        """

    Scenario: A non existing item
        When I send a GET request to "/items/C"
        Then the response status code should be 404
        And the response should be empty