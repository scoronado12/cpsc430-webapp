# cpsc430-webapp

**Do not forget that you should not commit in master!**

# Where the Code lives

You should only be able to edit anything under `webapp/`. If you need anymore `npm` packages, let Daniel or Stefano know.


## Depends

- `docker`
- `docker-compose`


# Details

- Postgresql username is `science`
- There is no password while working here

## Useful Commands

Bring up the container as a development enviroment - You will be able to modify files on the fly in this state.

    docker-compose up

Command to spawn a bash shell in the running container

    docker exec -it [docker id] bash

Command to spawn mysql database shell

    mysql -h 0.0.0.0 -P 3306 -u root -D earth_sci -p

The password is set inside `docker-compose.yml`

## TODOs

Create a script that will initialize any tables we need. This will be run every time the container is started via `docker-compose`.

[More information on postgresql container](https://hub.docker.com/_/postgres)

Give ideas on the react container giving out an error when loading the default webpage so that we can start working




