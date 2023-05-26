FROM postgres:13.3-buster


COPY init.sql /docker-entrypoint-initdb.d/


ENV POSTGRES_USER douglas
ENV POSTGRES_PASSWORD 12345
ENV POSTGRES_DB loja
