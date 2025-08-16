package com.mediaid.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class OcrService {

    @Value("${google.cloud.vision.api.key}")
    private String apiKey;

    private static final String VISION_API_URL = "https://vision.googleapis.com/v1/images:annotate?key=";

    public String recognizeText(byte[] imageBytes) {
        return "This is a test prescription.";
    }
}
