# cpsc430-webapp

**Do not forget that you should not commit in master!**

## Depends

- `docker`
- `docker-compose`

## Useful Commands

Bring up the container as a development enviroment - You will be able to modify files on the fly in this state

    docker-compose up

Command to spawn a bash shell in the running container

    docker exec -it [docker id] bash


Log into the database that is in the container (must be in container shell)

    psql -h [docker id] -U [username] -d [database]

## TODOs

Create a script that will initialize any tables we need. This will be run every time the container is started via `docker-compose`.

[More information on postgresql container](https://hub.docker.com/_/postgres)

Give ideas on the react container giving out an error when loading the default webpage so that we can start working




