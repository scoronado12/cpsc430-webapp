# cpsc430-webapp

Useful commands:

Bring up the container as a development enviroment

    docker-compose up

Command to spawn a bash shell in the running container

     docker exec -it [docker id] bash


Log into the database that is in the container (must be in container shell)

    psql -h [docker id] -U [username] -d [database] 
