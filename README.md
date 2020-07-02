## Pre-requisites
- You must have `yarn` or `npm` installed

## How to run?
- Clone the project
```shell script
git clone git@github.com:bonsaiilabs/cra-custom-serviceworker.git
```
- Install `serve` if not installed already
```shell script
npm install serve -g
```

- Create production build
```shell script
npm run build
```

- Run
```shell script
serve -s build
```
Your app with custom service worker is now running at http://localhost:5000