package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/mahdialharbi/mysite/backend/server/handlers"
	"github.com/rs/cors"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/api/assistLeaders", handlers.AssistLeadersHandler).Methods("GET")
	c := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:8081/api/assistLeaders"},
		AllowCredentials: true,
	})

	handler := c.Handler(r)

	fmt.Println("now listening on port: 8081...")
	log.Fatal(http.ListenAndServe(":8081", handler))
}
