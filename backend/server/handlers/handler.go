package handlers

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/mahdialharbi/mysite/backend/server/models"
)

func AssistLeadersHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Host", "stats.nba.com")
	w.Header().Set("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv\":72.0) Gecko/20100101 Firefox/72.0")
	w.Header().Set("Accept", "application/json text/plain */*")
	w.Header().Set("Accept-Language", "en-USen;q=0.5")
	w.Header().Set("Accept-Encoding", "gzip deflate br")
	w.Header().Set("x-nba-stats-origin", "stats")
	w.Header().Set("x-nba-stats-token", "true")
	w.Header().Set("Connection", "keep-alive")
	w.Header().Set("Referer", "https://stats.nba.com/")
	w.Header().Set("Pragma", "no-cache")
	w.Header().Set("Cache-Control", "no-cache")
	w.Header().Set("Access-Control-Allow-Origin", "*")

	client := &http.Client{}
	req, err := http.NewRequest("GET", "https://stats.nba.com/stats/leagueleaders", nil)

	q := req.URL.Query()
	q.Add("LeagueID", "00")
	q.Add("PerMode", "PerGame")
	q.Add("Scope", "S")
	q.Add("StatCategory", "PTS")
	q.Add("ActiveFlag", "")
	q.Add("Season", "2021-22")
	q.Add("SeasonType", "Playoffs")

	req.URL.RawQuery = q.Encode()
	fmt.Println(req.URL.String())

	if err != nil {
		fmt.Printf("error: %v", err)
	}

	resp, err := client.Do(req)
	if err != nil {
		fmt.Printf("error with request: %v", err)
	}

	defer resp.Body.Close()
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("error: %v", err)
	}

	var leagueLeaders models.PlayoffLeaders

	json.Unmarshal(body, &leagueLeaders)
	results, _ := json.Marshal(leagueLeaders.ResultSet.RowSet)
	w.WriteHeader(http.StatusOK)
	w.Write(results)
}
