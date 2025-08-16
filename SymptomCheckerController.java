package com.mediaid.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SymptomCheckerController {

    @Autowired
    private SymptomCheckerService symptomCheckerService;

    @PostMapping("/symptom-check")
    public SymptomCheckResponse checkSymptoms(@RequestBody SymptomCheckRequest request) {
        String suggestions = symptomCheckerService.analyzeSymptoms(request.getSymptoms());
        return new SymptomCheckResponse(suggestions);
    }
}
