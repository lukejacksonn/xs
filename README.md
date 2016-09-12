# xs
An extra small, stand alone web application architecture that is not a framework. This started off as (and still is) an experiment into dropping as many dependencies as possible from the frontend app development process and trying to make any compiled application code, as portable as possible.

## Overview

The aim is simple. Create a system that allows the developer to _just_ write html, css and javascript, whilst it takes care of importing, transpiling, minifying and concatenating all of the source code into a single distributed file. Nothing too groudbreaking, just simple vanilla flavoured code, that gets the job done.

An xs application project consists of at least, the following files:

### Application Files 
```
index.html, index.scss, index.js
```
### Development Files 
```
build.js, server.js
```

### Distributed Files 
```
index.html
```

