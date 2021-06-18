FROM golang:latest AS builder

WORKDIR /src

COPY app.go .

RUN go build -ldflags '-s -w' app.go  


FROM scratch

WORKDIR /appGo 

COPY --from=builder /src/app  .

CMD [ "./app" ]

