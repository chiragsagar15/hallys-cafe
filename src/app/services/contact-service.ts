import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'rxjs';
import { ContactMessage } from '../models/contactMessage.model';

interface ContactResponse {
  id: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(message: ContactMessage) {
    return this.http.post<ContactResponse>(this.apiUrl, message).pipe(timeout(10000));
  }
}
