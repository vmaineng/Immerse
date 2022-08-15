# Immerse

## Description

Immerse is an application where travelers can book a travel package to a desination that they have been yearning to go so they can fully immerse themsevles in a new experience.

## Setup

This contains the frontend and backend of Immerse, constructed with React.js, Bootstrap, Ruby on Rails, and custom CSS.

Some features I would like to implement in the near future is to implement Redux for state, utilize Chakra UI to style the application, and add more functionality to the dates for the project.

## Install the project

Start by **cloning** (not forking) the repository

```console
$ git clone git@github.com:vmaineng/Immerse.git
$ cd Immerse
$ code .
```

## Setup

```sh
 bundle install
 rails db:create
 npm install --prefix client

```

Then, 

```sh
rails s: run the backend on http://localhost:3000
npm start --prefix client: run the frontend on http://localhost:4000
```

## Deploying

This application has all the starter code needed to help you deploy your
application to Heroku. It's recommended to deploy your project early and push up
changes often to ensure that your code works equally well in production and
development environments.

If you've already set up your environment to deploy to Heroku, you can run the
commands below to deploy your application. If not, make sure to check out the
Environment Setup section below.

To deploy, first log in to your Heroku account using the Heroku CLI:

```sh
heroku login
```

Create the new Heroku app:

```sh
heroku create my-app-name
```

Add the buildpacks for Heroku to build the React app on Node and run the Rails
app on Ruby:

```sh
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
```


