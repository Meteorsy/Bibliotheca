# Bibliotheca
Bibliotheca Management System based on React with ES6 SpringBoot and NodeJS

## Table of contents

* [Getting Started](#getting-started)


## Getting Started

### Fetching the latest source code

The unreleased development files can be obtained by

 1. [Downloading](https://github.com/Meteorsy/Bibliotheca/archive/master.zip) or git clone
 2. Run `npm install` to install the node_modules
 3. Run `bower install` to install the third-part javascript libs but you don't need to do that
 4. Run `gulp server` to create the built files in the "dist" directory
 5. Install Redis Database and MySQL Database
 
### What included

```
Bibliotheca/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com.nmc/
│   │   │       ├── controller/
│   │   │       │   ├── BookController.java
│   │   │       │   ├── DocsController.java
│   │   │       │   ├── NavController.java
│   │   │       │   ├── SelfDBController.java
│   │   │       │   └── UserController.java
│   │   │       ├── dao/
│   │   │       │   ├── entity/
│   │   │       │   │   ├── Book.java
│   │   │       │   │   ├── Docs.java
│   │   │       │   │   ├── Nav.java
│   │   │       │   │   ├── SelfDB.java
│   │   │       │   │   └── User.java 
│   │   │       │   ├── repositorys/
│   │   │       │   │   ├── BookRepository.java
│   │   │       │   │   ├── DocsRepository.java
│   │   │       │   │   ├── NavRepository.java
│   │   │       │   │   ├── SelfDBRepository.java
│   │   │       │   │   └── UserRepository.java
│   │   │       │   └── utils/
│   │   │       │        ├── HttpSessionConfig.java
│   │   │       │        └── JPAConfig.java
│   │   │       ├── service/
│   │   │       │   ├── BookService.java
│   │   │       │   ├── DocsService.java
│   │   │       │   ├── NavService.java
│   │   │       │   ├── SelfDBService.java
│   │   │       │   └── UserService.java
│   │   │       ├── utils/
│   │   │       │   └── StringUtils.java
│   │   │       └── Bibliotheca
│   │   ├── resources/
│   │   │   └── application.properties
│   │   └── webapp/
│   │        ├── app/
│   │        │   ├── actions/
│   │        │   │   └── LoginAction.js
│   │        │   ├── components/
│   │        │   │   ├── common/
│   │        │   │   │   └── skin/
│   │        │   │   │        └── skin-default.scss
│   │        │   │   ├── console/
│   │        │   │   │   ├── BookBorrow/
│   │        │   │   │   │   └── BookBorrow.react.js
│   │        │   │   │   ├── BorrowCheck/
│   │        │   │   │   │   └── BorrowCheck.react.js
│   │        │   │   │   ├── BorrowList/
│   │        │   │   │   │   └── BorrowList.react.js
│   │        │   │   │   ├── ConsoleApp/
│   │        │   │   │   │   ├── ConsoleApp.react.js
│   │        │   │   │   │   └── ConsoleApp.react.css
│   │        │   │   │   ├── DatabaseBeStow/
│   │        │   │   │   │   └── DatabaseBeStow.react.js
│   │        │   │   │   ├── DatabaseCN/
│   │        │   │   │   │   └── DatabaseCN.react.js
│   │        │   │   │   ├── DatabaseEN/
│   │        │   │   │   │   └── DatabaseEN.react.js
│   │        │   │   │   ├── DatabaseMIT/
│   │        │   │   │   │   └── DatabaseMIT.react.js
│   │        │   │   │   ├── DatabaseSelf/
│   │        │   │   │   │   └── DatabaseSelf.react.js
│   │        │   │   │   ├── DBListItem/
│   │        │   │   │   │   ├── DBListItem.react.js
│   │        │   │   │   │   └── DBListItem.react.scss
│   │        │   │   │   ├── ExSelectList/
│   │        │   │   │   │   ├── ExSelectList.react.js
│   │        │   │   │   │   └── ExSelectList.react.scss
│   │        │   │   │   ├── HeaderBar/
│   │        │   │   │   │   ├── HeaderBar.react.js
│   │        │   │   │   │   └── HeaderBar.react.scss
│   │        │   │   │   ├── InputControl/
│   │        │   │   │   │   ├── InputControl.react.js
│   │        │   │   │   │   └── InputControl.react.scss
│   │        │   │   │   ├── Introduction/
│   │        │   │   │   │   ├── Introduction.react.js
│   │        │   │   │   │   └── Introduction.react.scss
│   │        │   │   │   ├── Message/
│   │        │   │   │   │   ├── Message.react.js
│   │        │   │   │   │   └── Message.react.scss
│   │        │   │   │   ├── MessageItem/
│   │        │   │   │   │   ├── MessageItem.react.js
│   │        │   │   │   │   └── MessageItem.react.scss
│   │        │   │   │   ├── NavBar/
│   │        │   │   │   │   ├── logo.png
│   │        │   │   │   │   ├── NavBar.react.js
│   │        │   │   │   │   └── NavBar.react.scss
│   │        │   │   │   ├── NavBarItem/
│   │        │   │   │   │   ├── NavBarItem.react.js
│   │        │   │   │   │   └── NavBarItem.react.scss
│   │        │   │   │   ├── NavHeader/
│   │        │   │   │   │   ├── NavHeader.react.js
│   │        │   │   │   │   └── NavHeader.react.scss
│   │        │   │   │   ├── NotificationItem/
│   │        │   │   │   │   ├── NotificationItem.react.js
│   │        │   │   │   │   └── NotificationItem.react.scss
│   │        │   │   │   ├── Notifications/
│   │        │   │   │   │   ├── Notifications.react.js
│   │        │   │   │   │   └── Notifications.react.scss
│   │        │   │   │   ├── Panel/
│   │        │   │   │   │   ├── Panel.react.js
│   │        │   │   │   │   └── Panel.react.scss
│   │        │   │   │   ├── QueryCheck/
│   │        │   │   │   │   └── QueryCheck.react.js
│   │        │   │   │   ├── QueryList/
│   │        │   │   │   │   └── QueryList.react.js
│   │        │   │   │   ├── QueryRequest/
│   │        │   │   │   │   ├── QueryRequest.react.js
│   │        │   │   │   │   └── QueryRequest.react.scss
│   │        │   │   │   ├── ResourceAdd/
│   │        │   │   │   │   ├── ResourceAdd.react.js
│   │        │   │   │   │   └── ResourceAdd.react.scss
│   │        │   │   │   ├── Search/
│   │        │   │   │   │   ├── Search.react.js
│   │        │   │   │   │   └── Search.react.scss
│   │        │   │   │   ├── SelectList/
│   │        │   │   │   │   ├── SelectList.react.js
│   │        │   │   │   │   └── SelectList.react.scss
│   │        │   │   │   ├── SimpleButton/
│   │        │   │   │   │   ├── SimpleButton.react.js
│   │        │   │   │   │   └── SimpleButton.react.scss
│   │        │   │   │   ├── SpreadList/
│   │        │   │   │   │   ├── SpreadList.react.js
│   │        │   │   │   │   └── SpreadList.react.scss
│   │        │   │   │   ├── User/
│   │        │   │   │   │   ├── user.jpg
│   │        │   │   │   │   ├── User.react.js
│   │        │   │   │   │   └── User.react.scss
│   │        │   │   │   ├── UserAdd/
│   │        │   │   │   │   ├── UserAdd.react.js
│   │        │   │   │   │   └── UserAdd.react.scss
│   │        │   │   │   ├── UserList/
│   │        │   │   │   │   ├── UserList.react.js
│   │        │   │   │   │   └── UserList.react.scss
│   │        │   │   │   ├── BookList/
│   │        │   │   │   │   └── BookList.react.js
│   │        │   │   │   └── UserModify/
│   │        │   │   │   │   └── UserModify.react.js
│   │        │   │   └── login/
│   │        │   │        ├── EditText/
│   │        │   │        │   ├── EditText.react.js
│   │        │   │        │   └── EditText.react.scss
│   │        │   │        ├── LoginApp/
│   │        │   │        │   ├── LoginApp.react.js
│   │        │   │        │   └── LoginApp.react.scss
│   │        │   │        ├── LoginButton/
│   │        │   │        │   ├── LoginButton.react.js
│   │        │   │        │   └── LoginButton.react.scss
│   │        │   │        └── LoginForm/
│   │        │   │             ├── LoginForm.react.js
│   │        │   │             └── LoginForm.react.scss
│   │        │   ├── constants/
│   │        │   │   └── LoginConstants.js
│   │        │   ├── dispatcher/
│   │        │   │   └── AppDispatcher.js
│   │        │   ├── lib/
│   │        │   ├── stores/
│   │        │   │   ├── ConsoleStore.js
│   │        │   │   └── LoginStore.js
│   │        │   ├── utils/
│   │        │   │   ├── NavBarToggle.js 
│   │        │   │   └── ProgressBar.js
│   │        │   ├── validators/
│   │        │   │   ├── BookValidator.js
│   │        │   │   ├── DBValidator.js
│   │        │   │   ├── QueryValidator.js
│   │        │   │   └── UserValidator.js
│   │        │   ├── app.js
│   │        │   └── app.scss 
│   │        ├── dist/
│   │        ├── node_modules/
│   │        ├── .babelrc
│   │        ├── .bowerrc
│   │        ├── .eslintrc
│   │        ├── bower.json
│   │        ├── favicon.ico
│   │        ├── gulpfile.js
│   │        ├── index.html
│   │        └── package.json
│   │
│   └── test/
│        ├── java
│        └── resources
│
├── .gitignore
├── LICENSE
├── pom.xml
└── README.md
```


## License
Copyright &copy;  Lethe<br>
Licensed under the MIT license.