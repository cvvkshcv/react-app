# Project setup: React + TypeScript + Vite

```
Case Study (UI Craft):

Design and build a Step-Flow UX pattern product checkout experience, where the following steps occur.

Steps
   1. Display a list of selectable products rendered from an API [you may simulate the api loading
   however you want].
      a. Multi selection of products must be allowed
      b. Continue button to confirm selection
   2. On “Continue” from the previous page, render a page to fetch the address [billing/shipping
   address] of the customer.
   3. On “Continue” from the previous page, render a page to display the final price including
   discount.
   4. On Submit,
      a. If the API call is successful, display a confirmation of the success.
      b. If the API call fails, then display an error message to illustrate.

Points to note:
   • You must not use multiple URL routes for the page, the entire experience should be in one-page
   • It must be possible to go back and forth between any step and the previously saved data must
   be available pre-filled/selected.
   • You may use any version of react and any library of your choosing.
   • It will be a bonus if you provide aesthetic styling to the page.
```

### Libraries used:

- React 18 - Base library
- Typescript - Type checking
- Zustand - State management
- Framer motion - Animation
- react-hook-form - Validation
- Tailwind - CSS styling

### API used

- Fake Store API - https://fakestoreapi.com/docs

### Re-usable component

- Stepper component
  - Using forwardRef & useImperativeHandle, exposing forward & backward funciton from component
  - Added framer motion animation while switching between tabs

### Features

- Re-usable stepper component
- Product listing page (Fetched from API with error handing)
- Product listing with animation
- Product filter (Client side)
- Cart with total calcuation
- User info page (Fetched from API with error handing)
- Update user address with validation and API call
- Checkout page shows list of item selected with total
- Checkout will submit the cart info with user info to API
