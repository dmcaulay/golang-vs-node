# Node.js Concurrency Model

* Asynchronous so it's never waiting for I/0 or CPU intensive tasks
* Single-threaded event loop
  * Tracks open aync calls
    * File access, DB queries, network connections
  * Node runs until all asynchronous logic completes

---

