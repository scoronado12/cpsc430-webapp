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

Command to access `postgresql` from your host (You will need `postgresql` installed)

    psql -h 127.0.0.1 -U science -p 8080 -U science -d earth_sci


## TODOs

Create a script that will initialize any tables we need. This will be run every time the container is started via `docker-compose`.

[More information on postgresql container](https://hub.docker.com/_/postgres)

Give ideas on the react container giving out an error when loading the default webpage so that we can start working




