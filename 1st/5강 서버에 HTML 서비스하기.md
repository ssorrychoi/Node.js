## 웹서버에 HTML 파일 서비스 하기

---

`fileSystem` 모듈은 `fs` 라고 한다.

Fs.js

```javascript
var fs = require("fs");
fs.writeFileSync("food.txt", "I like Potato");
console.log(fs.readFileSync("food.txt").toString());
```

fs라는 모듈을 불러온 후,

writeFileSync를 이용해 `food.txt`라는 파일을 생성하는데 그 파일의 내용은 `I like Potato` 가 된다.



server.js

```javascript
let http = require("http");
let fs = require("fs");

//404 페이지
function send404Res(res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("ERROR 404 : WTF");
  res.end();
}
//사용자 요구에 응답/처리
function onRequest(req, res) {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./index.html").pipe(res);
  } else {
    send404Res(res);
  }
}

http.createServer(onRequest).listen(5500);
console.log("Server is running");
```

