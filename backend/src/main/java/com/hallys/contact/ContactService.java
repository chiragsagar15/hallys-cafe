package com.hallys.contact;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private final ContactRepository repository;
    private final ContactEmailService emailService;

    public ContactService(
            ContactRepository repository,
            ContactEmailService emailService
    ) {
        this.repository = repository;
        this.emailService = emailService;
    }

    @Transactional
    public ContactMessage save(ContactRequest request) {
        ContactMessage message = new ContactMessage(
                request.name(),
                request.email(),
                request.message()
        );

        ContactMessage saved = repository.save(message);

        emailService.send(request);

        return saved;
    }
}
