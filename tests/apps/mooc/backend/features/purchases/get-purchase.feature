Feature: Get purchase
    In order to have purchases in the platform
    I want to get them
    Given I have the following discounts in the platform
        | id                                   | threshold | amount |
        | 870c4432-763d-43ae-8f10-9ad1dd1363c5 | 2         | 18     |
    Given I have the following items in the platform
        | id  | price  | discountId                            |
        | F   | 15     | 870c4432-763d-43ae-8f10-9ad1dd1363c5  |
        | G   | 20     | d8913cda-558a-4179-9a9b-33a84a81d1f5  |

    Scenario: A valid existing discount
        Given I have the following purchases in the platform
            | id                                    | itemIds  | date                     |
            | c6ed4614-a851-4af4-ba76-5e5bcf08d119  | [F,G]    | 2022-11-21T15:57:05.729Z |
            | 31d27ff9-54b0-43ef-bef3-cbcb8b0c5a01  | [G]      | 2022-11-21T15:57:05.729Z | 
        When I send a GET request to "/purchases/c6ed4614-a851-4af4-ba76-5e5bcf08d119"
        Then the response status code should be 302
        And the response should match:
        """
        {
        "id": "c6ed4614-a851-4af4-ba76-5e5bcf08d119",
        "itemIds": ["F", "G"],
        "date": "2022-11-21T15:57:05.729Z"
        }
        """

    Scenario: A non existing purchase
        When I send a GET request to "/purchases/b5a0af71-251f-4689-8cbe-c3bd4afd8e00"
        Then the response status code should be 404
        And the response should be empty