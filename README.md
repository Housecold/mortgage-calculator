# React Mortgage Calculator App 🏡

## Project Overview 🚀

This project is a **React-based mortgage calculator** that allows users to estimate their monthly mortgage payments by entering parameters like loan amount, interest rate, and loan term. It provides a simple and intuitive user interface, offering real-time updates to mortgage calculations as users adjust their inputs. The application is fully developed using React.js, focusing on the **frontend** with no backend or API integration.

## Technologies Used 🛠️

- **React.js**: For building the user interface and handling component state.
- **Material-UI (MUI)**: A popular React UI framework for implementing responsive and customizable components.
- **HTML5**: To structure the app’s content.
- **JavaScript (ES6)**: For logic and interactivity in the calculator.

## Project Structure 🗂️

The project follows a clean, organized structure for easy maintenance and scalability:

```
/ (Root Directory)
│
├── node_modules/                   # Node modules folder containing project's dependencies
│
├── public/                         # Public folder containing static files
│
├── src/                            # Source directory
│   ├── components/                 # Reusable React components
│   │   └── common/                 # Common components for the calculator
│   │       ├── Navbar.js           # Navigation bar
│   │       ├── Result.js           # Displays calculated mortgage results
│   │       ├── SliderSelect.js     # Input slider for loan values
│   │       ├── TenureSelect.js     # Dropdown for selecting mortgage tenure
│   │       └── SliderComponent.js  # General slider component for inputs
│   │
│   ├── App.js                      # Main React component for the app
│   ├── index.js                    # Entry point for React
│   ├── reportWebVitals.js          # Tool to measure performance (not implemented)
│   ├── setupTests.js               # Testing setup (not implemented)
│   └── theme.js                    # Custom theming or style variables
│
├── .gitignore                      # Files to be ignored by Git
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Lock file for dependency tree consistency
└── README.md                       # Project documentation
```

## Development Workflow 🔄

1. **Component Development**: Create reusable components for the mortgage calculator, such as sliders, input fields, and results display.
2. **State Management**: Use React's `useState` to manage user inputs and dynamically calculate mortgage payments.
3. **Styling**: Apply libraries like Material-UI to style the app and ensure responsiveness.
4. **Performance Monitoring**: Optionally, use the `reportWebVitals` utility to measure the app's performance.

## Setup Instructions 📝

To run this React project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:Housecold/mortgage-calculator.git
   ```

2. Install the dependencies:

   ```bash
   npx create-react-app .
   npm install @mui/material @emotion/react @emotion/styled
   npm install --save chart.js react-chartjs-2

3. Start the development server:
   
   ```bash
   npm start

4. After this, the app should automatically open in your browser at `http://localhost:3000` or whatever root you configured.

## Suggested Future Improvements 💡

1. **Amortization Table**: Add a feature to display a full amortization schedule, breaking down principal and interest for each payment.
2. **Unit Testing**: Implement unit tests using React Testing Library to ensure the reliability of the components and logic.
3. **Performance Monitoring**: Integrate real-time performance tracking by fully utilizing the `reportWebVitals.js` file, allowing for better insights into the app's performance and optimizing metrics like load time and interactivity.

## Contributors 👥

- Daniel Magalhães - [@Housecold](https://github.com/Housecold)
