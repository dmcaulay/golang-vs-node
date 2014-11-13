class: center, middle

# Node.js vs Go

---
# Why?

* Simple languages
* Scalable network applications
* Strict concurrency models

---

# JavaScript Types

```js
// numbers
var num = 1;
// strings
var str = "hello";
// booleans
var isValid = true;
// functions
var fn = function(arg) {
  console.log('this is a function');
};
var regex = /test/;

// dynamic
num = "1"; // is valid
fn(1, 'extra arg'); // is valid
```

---

# Go Types

```go
// numbers
var num = 1
// strings
var str = "hello"
// booleans
var isValid = true
// functions
func fn(arg string) int {
  fmt.Println("this is a function")
  return 1 // you must return a value if it's declared
}

// static
num = "1" // will cause a compile error
fn(1) // will cause a compile error
fn("1", 2) // will cause a compile error
```

---


# JavaScript Objects

```js
var obj = {
  num: 1,
  str: "hello",
  fn: function(arg) {
    console.log('a function in an object');
  },
  nested: {
    valid: true
  }
};
// arrays
var arr = [ 1, str, isValid ];

// dynamic
obj.num = "1"; // is valid
```

---

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


# Node.js Concurrency Model

* Asynchronous so it's never waiting for I/0 or CPU intensive tasks
* Single-threaded event loop
  * Tracks open aync calls
    * File access, DB queries, network connections
  * Node runs until all asynchronous logic completes

---

# Go Concurrency Model

* Simplified threading model
  * Goroutines allow parallel processing
  * Encourages Channels for synchronization (comparable to wait handles and events)
  * "Share memory by communicating, don't communicate by sharing memory."
  * Has Mutexes for syncing global state when communicating isn't an option
* Doesn't manage open threads
  * The application will exit unless you block on the main thread

---
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

# Node.js Performance

* Google V8
  * JIT compilation
* Event loop and I/O built in C (libev, libeio)

---
# Go Performance

* Intended to replace C++ similar to Java, but lightweight typing
* Compiled
* Statically typed
* Efficent memory management
* Allows access to pointers and faster Interop

---

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

# Go Importing and Exporting

```go
package user

import (
  "fmt"
  "ioutil"
)

type User struct {
  name string
}
func (u *User) parse(data string) {
  u.name = data
}

func ReadUser(file string) (User, error) {
  data, err := ioutil.ReadFile(file)
  if err != nil {
    return nil, err
  }
  user := User{}
  user.parse(data)
  return user, nil
}
```

---

# Node.js Dependency Management

* Has npm
* All dependencies are stored in the project directory under `node_modules`
* Very similar to Bundler, but a lot faster and easier to manage dependencies for different projects

---
# Go Dependency Management

* Strict folder structure

```
bin/
    streak                         # command executable
    todo                           # command executable
pkg/
    linux_amd64/
        code.google.com/p/goauth2/
            oauth.a                # package object
        github.com/nf/todo/
            task.a                 # package object
src/
    code.google.com/p/goauth2/
        .hg/                       # mercurial repository metadata
        oauth/
            oauth.go               # package source
            oauth_test.go          # test source
    github.com/nf/
        streak/
            .git/                  # git repository metadata
            oauth.go               # command source
            streak.go              # command source
        todo/
            .git/                  # git repository metadata
            task/
                task.go            # package source
            todo.go                # command source
```

---
# Go Dependency Management Continued

* No standard for locking down a version
* No standard for different projects using different versions

---
# Go to the Code

1. Read through code
  1. StatsD proxy JavaScript https://github.com/etsy/statsd
  2. StatsD proxy Go https://github.com/dmcaulay/proxy
2. Show tests

---
# In Practice

Statsd Proxy

* Node.js
  * Had to run multiple processes to read all incoming packets (see Node.js cluster)

* Go
  * One process, but dropping packets

* Results
  * Go used half as much CPU, but it wasn't processing all packets
  * Node.js used a lot less memory, but Go was most likely just falling behind

---
# Conclusion

Go: Statically typed
* Benefits
  * Faster
  * Less memory
  * Catches errors and compile time
* Cons
  * More boilerplate

Node.js: Asynchrous Programming
* Benefits
  * Simpler threading model because you're always on the same thread
* Cons
  * Callback hell, but usually the result of bad programming

Node.js: Community Maturity
* Node.js has npm (central repository)
* Node.js has a library for almost everything
* Go is growing fast and some great programmers are joining
  * Still has a long way to go
