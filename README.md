Minimal React Starter
---

A starter project with [React](https://facebook.github.io/react/), [Babel](http://babeljs.io/), and [Webpack](http://webpack.github.io/).

This starter is as minimal as possible while still including Babel and Webpack.


Create Project
---
```
git clone git@github.com:ahfarmer/minimal-react-starter.git
```



Setup
---

```
npm install
```



Usage
---

1. `node server.js`

2. Open [http://localhost:3000/](http://localhost:3000/).



Build it from Scratch
---
Starter projects can be difficult for beginners to use because of all the moving pieces. To help you understand this starter project, there is a [7-step walkthrough](http://andrewhfarmer.com/build-your-own-starter/) showing how to create it from scratch.



Why Minimal?
---
The primary purpose of this project is **learning.**

For **learning**, a minimal starter project is best. Too many dependencies can cause confusion for a beginner. The process of selecting and adding what you need to a minimal project can be a good way to learn.



Why not more Minimal?
---
Babel and Webpack are the two tools that I view as completely essential in a React project.

There are no other tools that I have used consistently in every single React project that I have built, no matter how large or how small.

**Babel:** Even if you are just writing a quick test, you will likely want to use JSX in your components rather than writing out `React.createElement` over and over.

**Webpack:** Webpack serves as both the web server and the JavaScript bundler. The only alternative to using a bundler would be to include a `<script>` tag for each of your `.js` files, and that gets messy very quickly, even in a simple project.



More Details
---

* No CSS. For experiments or tests, put your styles in `index.html` in a `<style>` tag. For real projects, pick from [these style tools](http://andrewhfarmer.com/how-to-style-react/).
* No Flux. If you need it - try [Redux](https://github.com/reactjs/redux) or [MobX](https://github.com/mobxjs/mobx)!
* Webpack is run with the `express` and `webpack-dev-middleware`.
* The 'content base' is set to `www`. Any files in that directory will be served by express.



HMR
---

HMR is not supported in the master branch for simplicity. If you would like HMR support, you can [see the changes that add HMR support](https://github.com/ahfarmer/minimal-react-starter/compare/hmr) or you can directly clone the HMR branch:

```
git clone -b hmr git@github.com:ahfarmer/minimal-react-starter.git
```
