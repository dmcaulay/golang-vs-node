# Go Concurrency Model

* Simplified threading model
  * Goroutines allow parallel processing
  * Encourages Channels for synchronization (comparable to wait handles and events)
  * "Share memory by communicating, don't communicate by sharing memory."
  * Has Mutexes for syncing global state when communicating isn't an option
* Doesn't manage open threads
  * The application will exit unless you block on the main thread

---
