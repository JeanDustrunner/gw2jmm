import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, ApiKey } from '@prisma/client';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
    private API_URL: string = 'http://localhost:3333/api'

    constructor(private readonly _http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        {
            return this._http.get<User[]>(`${this.API_URL}/users`);
        }
    }

    public getApiKeys(): Observable<ApiKey[]> {
        {
            return this._http.get<ApiKey[]>(`${this.API_URL}/apiKeys`)
        }
    }

    public getApiKeysForUser(userId: number): Observable<ApiKey[]> {
        {
            return this._http.get<ApiKey[]>(`${this.API_URL}/apiKeys/user/${userId}`)
        }
    }

    public getUserByEmail(email: string): Observable<User | null> {
        {
            return this._http.get<User | null>(`${this.API_URL}/users/${email}`)
        }
    }

    public getApiKeyById(id: number): Observable<ApiKey | null> {
        {
            return this._http.get<ApiKey | null>(`${this.API_URL}/apiKeys/${id}`)
        }
    }

    public createUser(email: string, name?: string): Observable<User> {
        {
            return this._http.post<User>(`${this.API_URL}/users/create`, {email: email, name: name})
        }
    }

    public updateUser(payload: User): Observable<User> {
        {
            return this._http.put<User>(`${this.API_URL}/users/update/${payload.id}`, payload)
        }
    }
}