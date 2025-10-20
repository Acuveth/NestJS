import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api, HelloResponse } from '../../services/api';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  message: string = '';
  loading: boolean = true;
  error: string = '';

  constructor(private apiService: Api) {}

  ngOnInit(): void {
    this.apiService.getHello().subscribe({
      next: (response: HelloResponse) => {
        this.message = response.message;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load data from API. Make sure the backend is running.';
        this.loading = false;
        console.error('Error fetching data:', err);
      }
    });
  }
}
