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
