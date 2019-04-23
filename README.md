# ToDoFrontEnd
Front-End for To-Do Aplication

# Technologies
 * React
 * Bootstrap

# Configuration

In order to run ToDoFrontEnd, you need to provide just one configuration property. Propery is stored in `.env` file.

### Api address

Pattern:
```sh
REACT_APP_API_URL=http://<IP_ADDRESS>:<PORT>
```

Example:
```sh
REACT_APP_API_URL=http://localhost:6969
```

# Run&Build

### Build production app

```sh
npm run-script build
```

It builds the app for production to the `build` folder.

### Run development app

```sh
npm start
```

Runs app in: `http://localhost:3000`.

### Run production app

First, install static server.
Via NPM:
```sh
npm install serve
```

or yarn:
```sh
sudo npm install yarn -g
yarn global add serve
```

Then run.
Via NPM:
```sh
nohup serve -s &
```

or yarn:
```sh
nohup yarn serve -l 3000 &
```

Runs app in: `http://localhost:3000`.

# What else ?

### Deployment

Both, Frontend and Backend were deployed on AWS EC2 instances. Also database was never installed on our local machines, we choose MySQL RDBS provided by AWS.

### Development process

We were working in two-person team supported by Scrum metodology. We keept most important Scrum meetings like daily standup, planning and summary. We have done 47 tasks to make both apps working fine.

### Roles

 * Kryniek - architect, developer, mentor, guy that know things and hard words
 * Justam92 - developer, user interface designer, girl that will convince you that your UI looks like shit and you have to make it looks differently

### Personal goals

 * Kryniek - to learn AWS and React
 * Justam92 - to learn Spring Boot and Java

### Screens

![1](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/1.png)

![2](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/2.png)

![3](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/3.png)

![4](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/4.png)

![5](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/5.png)

![6](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/6.png)

![7](https://github.com/justam92/ToDoFrontEnd/blob/master/screens/7.png)