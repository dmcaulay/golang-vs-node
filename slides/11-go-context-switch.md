# Go Conext Switch on I/O

```go
go func() { 
  // printed before the file is read
  fmt.Println("in goroutine")  
}()

// I/O forces context switching
data, err := ioutil.ReadFile("/etc/passwd")
if err != nil {
  fmt.Println("failed to read file contents", err)
} else {
  fmt.Println(data)
}

```

---


