Feature: Get discount
    In order to have discounts in the platform
    I want to get them

    Scenario: A valid existing discount
        Given I have the following discounts in the platform
            | id                                   | threshold | amount |
            | 11e20b2c-9267-41d0-a898-d1a0f370b3d7 | 3         | 9.99   | 
        When I send a GET request to "/discounts/11e20b2c-9267-41d0-a898-d1a0f370b3d7"
        Then the response status code should be 302
        And the response should match:
        """
        {
        "id": "11e20b2c-9267-41d0-a898-d1a0f370b3d7",
        "threshold": 3,
        "amount": 9.99
        }
        """