# Node.js Importing and Exporting

```js
var fs = require('fs');
var user = require('./user');

var readUser = function(file, callback) {
  fs.readFile(file, function(err, data) {
    if (err) return callback(err);
    callback(null, user.parse(data);
  });
};

module.exports = readUser;
```

---

