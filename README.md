# Next-routes with Firebase functions
For all information, please read the [Medium post](https://codeburst.io/next-routes-with-firebase-hosting-on-cloud-functions-e7c78308a24d)

## Installation

```bash
git clone https://github.com/JulienHe/firebase-next-routes-example.git
cd firebase-next-routes-example
yarn install
```

It is recommended to use a package manager that uses a lockfile and caching for faster dev/test cycles:

- [Yarn](https://github.com/yarnpkg/yarn)
- [npm5.1.x](https://github.com/npm/npm)
- [pnpm](https://github.com/pnpm/pnpm)

Set up firebase:

create a project through the [firebase web console](https://console.firebase.google.com/)
grab the projects ID from the web consoles URL: [console.firebase.google.com/project](https://console.firebase.google.com/project/)
update the `.firebaserc` default project ID to the newly created project

## Next.js Development

Standard Next.js development with Hot-module Reloading etc

```bash
yarn dev
```

## Deploy to Firebase

You will need to connect the project to your Firebase project. Edit the name in .firebaserc or run `firebase init` and choose not to override any files.

### Deploy Hosting resources and the rewrite Cloud Function

```bash
yarn deploy-app
```

### Deploy functions not used for the SSR

Deploy all functions specified in the function group. Edit this script to add more function groups. - see [Partial deploys docs](https://firebase.google.com/docs/cli/#partial_deploys) for how to use function groups.

```bash
yarn deploy-funcs
```

### Deploy everything to Firebase

```bash
yarn deploy-all
```

## Clean `dist` Folder

```bash
yarn clean
```
