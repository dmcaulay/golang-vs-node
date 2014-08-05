# Go Mutexes

```go
var state = make(map[int]int)
var mutex = &sync.Mutex{}

for i := 0; i < 100; i++ {
  go func() {
    key := rand.Intn(5)
    val := rand.Intn(100)
    // lock shared state
    mutex.Lock()
    state[key] = state[key] + val
    mutex.Unlock()
  }
}
```

---

