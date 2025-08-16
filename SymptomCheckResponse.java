package com.mediaid.backend;

public class SymptomCheckResponse {
    private String suggestions;

    public SymptomCheckResponse(String suggestions) {
        this.suggestions = suggestions;
    }

    public String getSuggestions() {
        return suggestions;
    }

    public void setSuggestions(String suggestions) {
        this.suggestions = suggestions;
    }
}
