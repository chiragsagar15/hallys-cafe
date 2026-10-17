package com.hallys.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ContactRequest(

        @NotBlank(message = "Name is required.")
        @Size(max = 100, message = "Name must not exceed 100 characters.")
        String name,

        @NotBlank(message = "Email is required.")
        @Email(message = "Please enter a valid email address.")
        @Size(max = 254, message = "Email must not exceed 254 characters.")
        String email,

        @NotBlank(message = "Message is required.")
        @Size(max = 5000, message = "Message must not exceed 5000 characters.")
        String message

) {
    public ContactRequest {
        name = name == null ? null : name.strip();
        email = email == null ? null : email.strip();
        message = message == null ? null : message.strip();
    }
}
