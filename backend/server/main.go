package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mahdialharbi/mysite/backend/server/backend/server/handlers"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/assistLeaders", handlers.AssistLeadersHandler).Methods("GET")
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:8080/api/assistLeaders"},
		AllowCredentials: true,
	})

	handler := c.Handler(r)

	fmt.Println("now listening on port: 8080...")
	log.Fatal(http.ListenAndServe(":8080", handler))
}
