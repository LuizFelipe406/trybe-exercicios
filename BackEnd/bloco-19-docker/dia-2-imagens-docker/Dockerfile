# Primeira Imagem
# FROM alpine:3.14
# CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]

# Segunda Imagem
# FROM httpd:2.4
# COPY index.html /usr/local/apache2/htdocs/
# EXPOSE 80
# CMD ["httpd-foreground"]

# Terceira Imagem
# FROM nginx:1.21-alpine AS primeiro-estagio
# WORKDIR /site

# COPY config.toml config.toml
# COPY index.html /site/layouts/index.html
# COPY _index.md /site/content/_index.md

# RUN apk add hugo
# RUN hugo --minify --gc
# RUN mv /site/public/* /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Quarta Imagem
# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]