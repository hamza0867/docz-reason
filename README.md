# Typescript Docz example

This repo provides a working example of a [Docz](https://docz.site) props documentation of an "Alert" component made with reason-react.  
There has been some changes made to the generated files by Bucklescript. I also added a declaration `.bs.d.ts` file for the `.bs.js` generated by bucklescript.  

The [Props component](https://www.docz.site/docs/built-in-components#component-props) made by docz and used to document a component props has [this implementation](https://github.com/doczjs/docz/blob/master/core/docz/src/components/Props.tsx).  

To know what worked for me and what didn't please take a look at the `src/components/Alert.tsx` file.

## Setup the project

```sh
git clone https://github.com/hamza0867/docz-reason.git && cd docz-reason
yarn install
```

## Start typescript watcher

```sh
yarn ts:watch
```
## Run docz documentation

```sh
yarn dev
```
To see the Alert component you can search for it in the searh menu in the top left corner like shown below:  

![search for component Alert](/images/search-Alert.png)
__Important:__
  - Do **NOT** run the bucklescript watcher, it will just remove some important changes made to make this repo work.
  - It is preferrable to launch the dev server with every change to the source files because docz cache handling doesn't work well and provides some weird results at times
