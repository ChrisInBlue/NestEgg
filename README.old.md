# NestEgg Navigator

NestEgg is a React-based retirement calculator designed to help users plan their retirement savings efficiently. Utilizing modern web technologies like ReactJS, TypeScript, and Redux, this tool offers a user-friendly interface to calculate required retirement savings and monthly contributions.

## Features

- **Retirement Savings Calculation:** Determine the total savings needed for retirement based on current age, retirement age, and other financial factors.
- **Monthly Contribution Estimator:** Calculate how much you need to save each month to reach your retirement goals.
- **Customizable Inputs:** Allows users to input their current savings, expected retirement age, and desired monthly income during retirement.
- **Responsive Design:** Accessible on both desktop and mobile devices.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repo
"git clone https://github.com/ChrisInBlue/NestEgg.git"

2. Install NPM packages
"npm install"

3. Start the development server
"npm start"

## Calculations
- Calculations are based on the following:

Years until Retirement = Retirement Age - Current Age

Total Months until Retirement = Years until Retirement * 12

Additional Savings Needed = Required Retirement Savings - Current Retirement Savings

Monthly Savings Needed = (Additional Savings Needed - (Current Retirement Savings Contribution * Total Months until Retirement)) / Total Months until Retirement


## Contact

Chris - chris@bluelightsoftware.co.za

Project Link: https://github.com/ChrisInBlue/NestEgg
