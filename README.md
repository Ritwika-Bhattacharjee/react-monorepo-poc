## react-yarn-monorepo-poc

### Steps to Create Monorepo-microfrontend integrated POC:

#### 1. Check yarn version, if not present use command: npm install yarn -g
#### 2. Create a package.json file in the root folder 
##### Content of package.json
##### {
#####    "private":true,
#####    "name":"mono-repo",
#####    "workspaces": [
#####        "packages/*"
#####    ]
##### }

#### 3. cd packages
#### 4. npx create-mf-app app1 (create on port 3001)
#### 5. npx create-mf-app app2 (create on port 3002)
#### 6. npx create-mf-app home (create on port 3000)
#### 7. add the code in these apps as per this repo (this is the usual module federation code except the respective node modules in each app)
#### 8. yarn add -D webpack-bundle-analyzer (do this in all three apps) (also add any other dependencies needed)
#### 9. if node modules are downloaded in each individual apps, then delete them, go to the root folder, delete the existing node modules folder and do yarn install again (But make sure the package.json files of each app has the required dependencies)
#### 10. npm start all the three apps

### Steps to start

#### 1. npm install in root folder
