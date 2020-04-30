# CPSC 430 Enviromental Science Database Web App 
**Do not forget that you should not commit in master!**

# Where the Code lives

The code corresponding with the client-side content is located in `webapp/`. This will be rendered by the `web` container.

Anything corresponding with server-side content from our database is located in `server/`. This is served to users via `server` container.

## Depends

As-is, the application as a whole depends on two pieces of software.

- `docker`
- `docker-compose`

# Details

There are three containers involved with this project.

1. `web` - (based on `node`) which serves as the node/react/etc container to render user-friendly webpages
2. `server`- (also based on `node`) which serves as means to contact the database via internal `localhost` `HTTP GET`/`HTTP POST` requests
3. `mariadb` which serves as the container holding a database. Data placed in here throughout the run is currently not persistent

These relationships are established in `docker-compose.yml`

## Useful Commands

Bring up the container as a development enviroment - You will be able to modify files on the fly in this state.

    docker-compose up

Command to spawn a bash shell in the running container

    docker exec -it [docker id] bash

Command to spawn mysql database shell

    mysql -h 0.0.0.0 -P 3306 -u root -D earth_sci -p


## TODOs

If the project is incomplete and is picked up by a future group, the following will need to be done before deployment to UMW Domains:

1. Replace all references to `127.0.0.1` or `localhost` with an enviroment variable that contains the URL to an api server like how the `server` container works
2. Move the references to the database credentials in `/server/AlumniQuery.js` into enviroment variables.
3. Deploy each directory separately to UMW Domains and point the NodeJS installer to their respective `package.json` files.




