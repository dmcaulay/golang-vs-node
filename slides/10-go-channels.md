# Go Channels

```go
messages := make(chan string)

// start a goroutine
go func() { messages <- "ping" }()

// waiting for a channel forces a context switch
msg := <-messages
fmt.Println(msg)
```

---

