Feature: Create a new discount
    In order to have discounts in the platform
    I want to create a new discount

    Scenario: A valid non existing discount
        When I send a PUT request to "/discounts/48907c50-a2e4-4998-8f0a-4d5176f5bfbe" with body:
        """
        {
        "threshold": "2",
        "amount": "19.99"
        }
        """
        Then the response status code should be 201
        And the response should be empty
    
    Scenario: A non valid existing discount
        Given I have the following discounts in the platform
            | id                                   | threshold | amount |
            | 0cb47625-9580-477f-ac9f-0dde9b2cc3b6 | 3         | 9.99   | 
        When I send a PUT request to "/discounts/0cb47625-9580-477f-ac9f-0dde9b2cc3b6" with body:
        """
        {
        "threshold": "2",
        "amount": "19.99"
        }
        """
        Then the response status code should be 409
        And the response should be empty