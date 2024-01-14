Basic setup
1)create simple folder with empty index.html, app.js
2)npm init
3)npm install -D parcel(web bundler for dev mode, i.e. -D)
4)run with, npx parcel index.html
5)npm install react, react-dom or npm i react

To install the dependency:
1)for fresh install of devpencency, npm i
2)To build production, npx parcel build index.html
3)with parcel, we dont need to mention, "main" in package.json as we are, mentioning it while building app, 
   i.e. npx parcel index.html


Shortcut
1) write "start :parcel index.html" in script in package.json to run in dev, and run as, "npm start", 
  similar for prod