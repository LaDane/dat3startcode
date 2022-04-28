# Startcode Setup

## github.com
> 1) Create new repositiry

> 2) Clone this startcode into new repository

> 3) Create secret "REMOTE_USER" with tomcat username

> 4) Create secret "REMOTE_PW" with tomcat password

## Workbench
> 1) Create 2 new databases in local environment (normal + _test)

> 2) Create 2 new databases on droplet (normal + _test)

## backend POM.xml
> 1) Change artifactId id
> ```<project><artifactId>{project backend name}<artifactId>```

> 2) Change name
> ```<project><name>{project backend name}<name>```

> 3) Change remote server to Droplet tomcat manager
> ```<project><properties><remote.server>{www.DOMAIN.dk/manager/text}<remote.server>```

> 4) Change database destination
> ```<project><properties><db.name>{database name}<db.name>```

> 5) Change maven-war-plugin version to 3.3.2

## backend persistence.xml
> 1) Change normal javax.persistence.jdbc.url to database
> ```"jdbc:mysql://localhost:3306/{database name}?serverTimezone=UTC"```

> 2) Change test javax.persistence.jdbc.url to database
> ```"jdbc:mysql://localhost:3306/{test database name}?serverTimezone=UTC"```

## backend maven.workflow
>1) Change branches to "main"

> 2) Change database
> ```mysql database: '{test database name}'```

## IntelliJ Project Structure
> 1) Change "Project name"
> ```"{project name}-backend"```

> 2) Change modules
> ```"{project name}"```

>3) Assert that artifacts work
