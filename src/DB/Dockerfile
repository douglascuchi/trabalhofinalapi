FROM postgres:13.3-buster


COPY init.sql /docker-entrypoint-initdb.d/


ENV POSTGRES_USERS admin
ENV POSTGRES_PASSWORD admin
ENV POSTGRES_DB loja
