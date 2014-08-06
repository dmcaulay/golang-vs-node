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

