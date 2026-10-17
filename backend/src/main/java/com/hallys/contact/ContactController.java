package com.hallys.contact;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> submit(
            @Valid @RequestBody ContactRequest request
    ) {
        ContactMessage saved = service.save(request);

        ContactResponse response = new ContactResponse(
                saved.getId().toString(),
                "Your message has been received."
        );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }
}
