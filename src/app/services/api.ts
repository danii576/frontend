import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Fetch all editable pages
  getEditablePages() {
    return this.http.get(`${this.baseUrl}/editable-pages`);
  }

  // Fetch one page by slug
  getPage(slug: string) {
    return this.http.get(`${this.baseUrl}/editable-pages/${slug}`);
  }

  // Update page
  updatePage(slug: string, data: any) {
    return this.http.put(`${this.baseUrl}/editable-pages/${slug}`, data);
  }
}
