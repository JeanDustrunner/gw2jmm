import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, APIKey } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class PrismaService {
    private API_URL: string = 'http://localhost:3333/api'

    constructor(private readonly _http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        {
            return this._http.get<User[]>(`${this.API_URL}/users`);
        }
    }

    public getApiKeys(): Observable<APIKey[]> {
        {
            return this._http.get<APIKey[]>(`${this.API_URL}/apikeys`)
        }
    }
}