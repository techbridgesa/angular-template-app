import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class UserService {
    constructor(private readonly http: HttpClient) {}

    get(): Observable<any>{
        return this.http.get(`route`);
    }
}