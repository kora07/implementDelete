# Lab Exercise: Create a React App that Renders a List with a Delete Button 📝🗑️

## Objectives 🎯
In this task, we will develop a React application that displays a list of items, each with a delete button. Clicking this button will trigger a DELETE request to the server, thus demonstrating CRUD operations in React.

## Prerequisites 🧐
You should have a basic understanding of JavaScript, React, and familiarity with fetch API or axios for making HTTP requests.

## Steps 🚀

1. **Initialize State**: Inside your 'ItemList' component, initialize a state variable to store the list items and any API responses.

2. **Find an API**: The `API_URI` is provided in the `src/App.jsx` file. You will use this URL to make requests to the API.
    > Note: If you are unable to find the API_URI, please reach out to your mentor.

3. **Fetch List Items**: Write a method that makes a GET request to the API to fetch the list items when the component mounts.

4. **Render List Items**: In your component's render method, map over the state variable storing the list items and render each item along with a delete button.

5. **Create a Delete Method**: Write a method that makes a DELETE request to the API when a delete button is clicked. The request should include the ID of the item to be deleted.

6. **Update List After Deletion**: After a successful DELETE request, update the list in your state to reflect the deletion.

7. **Handle API Response**: Handle any errors that may occur during the request and update the state with the API response.

## Outcome 🏁
By the end of this task, you will have a functional React application that renders a list of items, each with a delete button. Clicking this button will delete the item from the server and update the list. This is a crucial skill in creating dynamic and interactive web applications.
