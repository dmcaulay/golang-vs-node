# Node.js Async Example

```js
// throws an error
var data = fs.readFileSync('/etc/passwd');
console.log(data);

// callback with an error
fs.readFile('/etc/passwd', function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

---
