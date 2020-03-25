## Section1. Node.js + Express 웹서버 설정

---

### 2020.03.25

`npm init` 으로 프로젝트를 설정한다.

-> package.json이 생성된다.

```json
{
  "name": "node_server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

---

### Express server 설치

`npm i express --save` 

```json
 "dependencies": {
    "express": "^4.17.1"
  }
```

express 모듈이 추가됨

---

### Nodemon 설치

`npm i nodemon -g` 

서버 실행할때, 원래는 `node app.js` 로 서버를 실행 시켰는데, nodemon을 설치한 후엔 `nodemon app.js` 로 실행하게 되면 파일이 바뀔때마다 자동으로 서버를 내렸다가 올려주는 역할을 한다.

App.js

```javascript
var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Start, express server is running...");
});
```

---

### URL Routing 처리

app.js

```javascript
var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Start, express server is running...");
});

app.get("/", function(req, res) {
  //   res.send("<h1>wurrup</h1>shit");
  res.sendFile(__dirname + "/public/main.html");
});
```

---

### static 디렉토리 설정

app.js에 추가해준다.

```javascript
app.use(express.static("public"));
```

이렇게 추가하면 static 디렉토리를 public으로 설정한 것이 된다.



app.js

```javascript
var express = require("express");
var app = express();

app.listen(3000, function() {
  console.log("Start, express server is running...");
});

app.use(express.static("public"));

//url routing
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});
app.get("/main", function(req, res) {
  res.sendFile(__dirname + "/public/main.html");
});
```

public/main.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>main</title>
  </head>
  <body>
    <h1>Main page</h1>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut error quaerat
    quidem facilis voluptas libero sint quasi numquam maxime impedit, rem
    corporis blanditiis, hic sit esse adipisci laboriosam non voluptatem?
    <img
      src="images/ilbuni.png"
      alt="일분이"
      style="width:400px;height:400px;"
    />
    <script src="main.js"></script>
  </body>
</html>
```

