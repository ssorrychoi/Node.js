## Section 2. Request,Response 처리 기본

---

### Post 요청 처리

post 요청 처리를 하기 위해선 `body-parser` 라는 모듈이 필요하다.

`npm i body-parser --save`

app.js

```javascript
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
```

Public > form.html 생성

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>email form</title>
  </head>
  <body>
    <form action="/email_post" method="post">
      email : <input type="text" name="email" /><br />
      <input type="submit" />
    </form>
  </body>
</html>
```

method를 post로 지정한 후 submit으로 전달한다.

