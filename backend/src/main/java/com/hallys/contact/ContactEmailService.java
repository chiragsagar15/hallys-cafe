package com.hallys.contact;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactEmailService {

    private final JavaMailSender mailSender;
    private final String sender;
    private final String recipient;

    public ContactEmailService(
            JavaMailSender mailSender,
            @Value("${spring.mail.username}") String sender,
            @Value("${hallys.contact.recipient}") String recipient
    ) {
        this.mailSender = mailSender;
        this.sender = sender;
        this.recipient = recipient;
    }

    public void send(ContactRequest request) {
        SimpleMailMessage email = new SimpleMailMessage();

        email.setFrom(sender);
        email.setTo(recipient);
        email.setReplyTo(request.email());
        email.setSubject("New message from Hally's contact form");

        email.setText(
                "Name: " + request.name() + "\n"
                + "Email: " + request.email() + "\n\n"
                + "Message:\n" + request.message()
        );

        mailSender.send(email);
    }
}
