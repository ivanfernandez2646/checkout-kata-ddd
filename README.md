Write a program that implements a checkout system of a store. This program takes
a set of products as string (ABBDBBAC) representing the producs on a basket and returns
the total amount to pay. Each product has a fixed price, but some have special discounts.

## Item | Price | Discount

A | 50 | 3 for 130
B | 30 | 2 for 45
C | 20 |
D | 15 |

Example results:
AA >> 100
AABCDADDCD >> 260
AAABBBCCCDDD >> 310

TODO:

1. Add more coverage to test
2. Implement Open API Swagger
3. Move nullable.ts to shared/domain
4. Add arranger to clean ddbb after each cucumber test
5. Add handler for exceptions (apps)