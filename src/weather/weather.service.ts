import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class WeatherService {
    private readonly apiKey = process.env.OPENWEATHER_API_KEY || '4cb469b562eb287c449204c8c84e742f';
    private readonly apiUrl = 'http://api.openweathermap.org/data/2.5/weather';

    constructor(private readonly httpService: HttpService) {}

    getWeather(city: string): Observable<any> {
        const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}`;

        return this.httpService.get(url).pipe(
            map((response: { data: any }) => response.data),
            catchError(error => {
                console.error('Error fetching weather data:', error);
                return throwError(() => new Error('Error fetching weather data'));
            })
        );
    }
}
