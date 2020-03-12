# 4.2.1 React Ecosystem

---

### 🏠Housekeeping: Keys

```
Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`.
in SomeComponent (at src/index.js:24)
in App (at src/index.js:31)
```

EXAMPLE

```jsx

const item = [
  {text: 'Item 1',
  id: "220"},
  {text: 'Item 2',
  id: "112"},
]

const Bacon ({items}) => (
  {items.map(item => <li key={item.id}>{item.text} </li>   )}
)
```
**You can also use the text if there is no id but you must remove the space ** 

EXAMPLE: 

```jsx

const item = [
  {text: 'Item 1'},
  {text: 'Item 2'},
]

**THE SYNTAX HERE MAY NOT BE ACCURATE**

const Bacon ({items}) => (
  {items.map(item => <li key={`${item.text.replace(" ", "-")}`}>{item.text} </li>)}
)
```



---

### 🏠Housekeeping: Modules

In the last lecture, we saw **default exports**

```js
function Button(props) {
  ✂️
}

export default Button;
```

```js
import Button from '../Button';
```

---

There are also **named exports**

```js
// authentication-utils.js
export const signUp = () => { ✂️ };
export const logIn = () => { ✂️ };
export const logOut = () => { ✂️ };
```

```js
import { logIn, logOut } from '../../authentication-utils.js';
```

---

### A module can have:

- 0 or 1 _default_ exports,
- any number of _named_ exports, and
- both types of exports.

---

# Exercise

Are the following code snippets correct or incorrect?

Fix them, if incorrect

---

```js
// src/data.js
const data = { hi: 5 };

export default data;
```

```js
// src/index.js
import theBestData from './data';
```

---

```js
// src/data.js
export const MAGIC_NUMBER = 123;
```

```js
This is wrong... needs squigglies inless you want to inport it as object. 
// src/index.js
import MAGIC_NUMBER from './data';
```

---

```js
// src/data.js
export const users = [];
export const sessions = [];

const data = { users, sessions };

export default data;
```

```js
// src/index.js
import {data, users} from './data';
```

---

```js
// src/data.js
export default const baseball = '⚾️';

```

```js
// src/index.js
import baseball from './data';
```

---
