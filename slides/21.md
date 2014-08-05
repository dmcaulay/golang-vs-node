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
