Feature: Create a new purchse
    In order to have purchases in the platform
    I want to create a new purchase
    Given I have the following discounts in the platform
        | id                                   | threshold | amount |
        | ff243076-445a-402f-a07c-3d66da93fad3 | 2         | 5.99   |
    Given I have the following items in the platform
        | id  | price  | discountId                              |
        | E   | 3      | ff243076-445a-402f-a07c-3d66da93fad3    | 

    Scenario: A valid non existing purchase
        When I send a PUT request to "/purchases/ea2cedd6-8127-47f9-b7b1-0383c53df514" with body:
        """
        {
        "itemIds": ["E"]
        }
        """
        Then the response status code should be 201
        And the response should be empty
    
    Scenario: A non valid existing purchase
        Given I have the following purchases in the platform
            | id                                   | itemIds |
            | e79c06a5-9aa4-48fc-b934-4913b717800b | ['E']   |
        When I send a PUT request to "/purchases/e79c06a5-9aa4-48fc-b934-4913b717800b" with body:
        """
        {
        "itemIds": ["E"]
        }
        """
        Then the response status code should be 409
        And the response should be empty

    @skip
    Scenario: Item not found
        When I send a PUT request to "/purchases/6e344e21-6a5b-4643-a633-6a5e2d59590f" with body:
        """
        {
        "itemIds": ["E"]
        }
        """
        Then the response status code should be 404
        And the response should be empty