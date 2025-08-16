package com.mediaid.backend;

public class OcrResponse {
    private String text;

    public OcrResponse(String text) {
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
