# Recruitment task

The recruitment task is to write a program to represent the process of
book purchasing process (retrieving book data from the API, adding and removing
products from the basket, filling in the form with personal data necessary
order processing).

The solution to the assignment should be placed in the _front_ folder.

### The application should consist of 3 subpages:

#### 1. Home page

###### List of functionalities consisting of:

- downloading data from API after entering the application page (**GET** _/book_),
- displaying previously downloaded data in a specific format, i.e. each
  book should be displayed in a specific format, i.e. each book should be represented by one block, which should contain the book's cover, title, author, number
  book, its title, author, number of pages, and a button:
  - `Add TO CART' which will add a specific item to the shopping cart.
- a button that will allow you to go to the shopping cart.

#### 2. The page presenting the shopping cart

###### List functionality consisting of:

- displaying a list of books selected by the user,
- the `NEXT` button which will direct to the order summary stage.

##### 3. A page containing a form necessary to place an order

###### A list of functionalities consisting of:

- preparation of a form with fields:
  - first name,
  - surname,
  - city,
  - postal code.
- the button "I ORDER AND PAY" after pressing which the data will be sent to the
  endpoint **POST** _/order_.

###### Additional functionalities:

- form validation.

### Technical criteria

- react,
- any state management library like redux.
- Tailwind or bootstrap.
- implementation in typescript
- automatic tests with possibility of generating coverage report

## API Documentation

Documentation in OpenAPI 3 format is available by running the mock server
and navigating to the address: [localhost:3001/docs](http://localhost:3001/docs).

## Starting the development environment

Node.js is required (Yarn is additionally recommended). The project requires
installation and running the mock server API:
``bash
cd api
yarn
yarn start

```


```
