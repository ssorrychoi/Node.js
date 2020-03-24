## Module

---

여러 기능을 모아서 따로 사용할 수 있는 것 === 모듈

일종의 라이브러리이다.



app.js

```javascript
let food = require("./food");
food.Sausage();
food.Hamburger();
```

food.js

```javascript
function printSausage() {
  console.log("Pink Hotdog is fucked");
}

function printHamburger() {
  console.log("I luvin it");
}

module.exports = {
  Sausage: printSausage,
  Hamburger: printHamburger
};
```

