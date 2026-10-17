import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact-service';
import { type ContactMessage } from '../../models/contactMessage.model';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = '';
  email = '';
  message = '';

  isSubmitted = signal(false);
  isLoading = signal(false);
  hasError = signal(false);

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (this.isLoading()) {
      return;
    }

    if (form.invalid || !this.name?.trim() || !this.message?.trim()) {
      form.control.markAllAsTouched();
      this.hasError.set(true);
      this.isSubmitted.set(false);
      return;
    }

    const contactMessage: ContactMessage = {
      name: this.name.trim(),
      email: this.email.trim(),
      message: this.message.trim(),
    };

    this.isLoading.set(true);
    this.isSubmitted.set(false);
    this.hasError.set(false);

    this.contactService.sendMessage(contactMessage).subscribe({
      next: () => {
        this.isLoading.set(false);
        this.isSubmitted.set(true);
        form.resetForm();
      },
      error: () => {
        this.isLoading.set(false);
        this.hasError.set(true);
      },
    });
  }
}
