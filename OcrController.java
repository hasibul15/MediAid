package com.mediaid.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/ocr")
public class OcrController {

    @Autowired
    private OcrService ocrService;

    @PostMapping("/upload")
    public OcrResponse uploadPrescription(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return new OcrResponse("Please select a file to upload.");
        }

        try {
            byte[] bytes = file.getBytes();
            String recognizedText = ocrService.recognizeText(bytes);
            return new OcrResponse(recognizedText);
        } catch (IOException e) {
            e.printStackTrace();
            return new OcrResponse("Failed to upload file.");
        }
    }
}
