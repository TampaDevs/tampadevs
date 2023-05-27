# Tampa Devs

![GtuNm3R1yV](https://user-images.githubusercontent.com/10290348/162232393-26045f1f-7f79-466b-9686-47a77b72bd58.gif)

## Installing the right version of node for this project

This project currently uses Node version 17.9.1 as the preferred environment

## Using an Eleventy.js Docker Image (easiest method)

The easiest way to run a development environment for this site is to use [Docker](https://www.docker.com/).

After installing Docker on your machine, run the following command to spin up a container with a functional Eleventy environment:

```
docker run --rm -v /path-to/this-repo/on-your/disk:/app --name eleventy -p 8080:8080 femtopixel/eleventy --serve 
```

**Note:** Replace `/path-to/this-repo/on-your/disk` in the above command with the local path to your clone of the `tampadevs` repository on disk.


## Setting Up a Local Environment with NVM 

We suggest using NVM, which manages the node-instance that you are using to run this project

You can install nvm using the instructions at [NVM's official repository](https://github.com/nvm-sh/nvm).

Now set the node version in the terminal for the Tampa Devs project:

```
nvm install 17.9.1
nvm use 17.9.1
```

If you use a windows environment follow the commands here instead with NVM [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### Global Installation

You'll want to install the CLI (command line interface) for eleventy. It's used to run the project

```
npm install -g @11ty/eleventy
```

Now run these commands while on the project

```
npm install
npm run dev
```

Theoretically everything should work fine, and you can navigate to localhost:8080 and make changes / see them instantly on the site

### Local Environment FAQ 

Here are some common issues we've run into regarding installation problems with this repo.

> I'm getting a node-gyp error

It's probably a `sharp` module issue, this is used for image minimization. It runs best in a linux environment since it has a lot of dependencies associated with it. Try modifying the node version with `nvm` to see if you can fix it. There is also the potential to run this project in a docker environment, but have not been able to set it up (you need docker installed)

> it says I need sass

Run

```
npm install -g sass
```

*This project is tested with [BrowserStack](https://www.browserstack.com/).*

## Test PR change