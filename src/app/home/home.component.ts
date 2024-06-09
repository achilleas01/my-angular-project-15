import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {

  parentMessage = 'Hello from the Parent Component!';
  notificationMessage!: string;

  weatherData: any;
  subscription!: Subscription;
  errorMessage!: string;
  private apiKey = 'b6090dddf800e69abf85a71a0fd1fcad';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Athens&units=metric&appid=${this.apiKey}`;

  constructor(private http: HttpClient) {
    console.log('HomeComponent Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('HomeComponent OnChanges', changes);
  }

  ngOnInit(): void {
    console.log('HomeComponent OnInit');
    this.fetchWeather();
  }

  ngOnDestroy(): void {
    console.log('HomeComponent OnDestroy');
  }

  onNotify(notification: string) {
    this.notificationMessage = notification;
  }

  fetchWeather(): void {
    this.subscription = this.http.get(this.apiUrl).subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching weather data';
      }
    });
  }

}
