FROM nginx:latest


COPY html /user/share/nginx/html

#cria pasta dentro do container
WORKDIR /app

RUN apt-get update && \
    apt-get install vim -y

#comando fixo, não pode ser substituido mas recebe parametros 
ENTRYPOINT ["echo", "Hello"]


#comando variavel, pode ser alterado pelos parametros inseridos no comando docker run depois da imagem do container
CMD ["Micael Fernandes"]



