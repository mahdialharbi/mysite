package models

type PlayoffLeaders struct {
	Resource   string `json:"resource"`
	Parameters struct {
		LeagueID     string      `json:"LeagueID"`
		PerMode      string      `json:"PerMode"`
		StatCategory string      `json:"StatCategory"`
		Season       string      `json:"Season"`
		SeasonType   string      `json:"SeasonType"`
		Scope        string      `json:"Scope"`
		ActiveFlag   interface{} `json:"ActiveFlag"`
	} `json:"parameters"`
	ResultSet struct {
		Name    string          `json:"name"`
		Headers []string        `json:"headers"`
		RowSet  [][]interface{} `json:"rowSet"`
	} `json:"resultSet"`
}
