# Go Objects

```go
type nested struct {
  valid bool
}
type example struct {
  num int
  str string
  nestedEx nested
}
ex := example{num: 1, str: "hello", nestedEx: nested{true}}

// static
ex := example{num: "1", str: "hello", nestedEx: nested{true}} // will cause a compile error
ex.num = "1" // will cause a compile error
```

---


