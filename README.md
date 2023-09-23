# World Cup Fantasy Football Web App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

This web app allows to play a "Fantasy Footbal" game, using the players from the last world cup (Qatar 2022).
The goal is to create your team by selecting players from the list in order to create your team.

The rules for your team are:
- **1 coach**
- **Minimum 4 defenders**
- **Minimum 4 midfielders**
- **Minimum 2 strikers**
- **Minimum 2 goalkeepers**

If you don't match this rules, the app will warn you in the "My team" view

The app is deployed on netlify at https://worldcup-fantasy.netlify.app/. It consists of three views:

## Endpoint

| view | description | 
| --- | --- |
| / | Home: shows the description and rules of the app | 
| /draft | Players list: shows the list of players available to draft. | 
| /draft/my-team | Players drafted: shows the players you have drafted from draft view |

The players displayed in the list are all fetched from [Rapid API - Football](https://rapidapi.com/api-sports/api/api-football)

## Environment Variables
It is important to configure required environment variables in a `/src/environments/environment.ts` file in order to run the project. This file was not uploaded to the repo in order to keep safe the api key from api-footbal.api.

Here is an example with all the required env variables
| **environment.ts** |
| --- | 
```typescript
export const environment = {
    apiFootballUrl: 'https://api-football-v1.p.rapidapi.com/v3',
    apiKey: 'your-api-key',
    apiHost: 'api-football-v1.p.rapidapi.com'
}

```

<mark>
    IT IS IMPORTANT TO CONFIGURE THIS ENVIRONMENT FILE BEFORE RUNNING THE APP LOCALLY,
</mark>

<mark>
    OTHERWISE IT WONT WORK!!
</mark>


## Guide

As mentioned, this project was generated with Angular Cli, so if you want to run this project locally you must install Angular in order to be able to run the project. Please follow the link [Angular-cli](https://github.com/angular/angular-cli) to see the installation instructions.

You must install nodeJs also. [Node JS - Documentation](https://nodejs.org/en/)

Please follow this steps in order to run the project:
1. Clone or Download this project. In a terminal run: 
    ```bash
        git clone https://github.com/carlosempd/wc-fantasy.git
    ```
    (Install [git](https://git-scm.com/downloads) in case you haven't installed it yet).

2. In the terminal navigate to the project folder. For example:
    ```bash
        cd /wc-fantasy
    ```

3. Install node modules using:
    ```bash
        npm install
    ```

4. Run the Development Server as follows in 'Development server' section.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

This command will open a new browser showing the results of the test suite interactively.

```bash
   # unit tests
   ng test
```

