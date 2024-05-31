import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Iunit {
  id: string;
  name: string;
  address: string;
  description: string;
  created_at: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  getAllUnit(): Observable<any>{
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit');
  }
  
  postUnit(data: Iunit): Observable<any> {
    return this.http.post('https://knowledgehub.demopolyct.online/api/unit', {
      name: data.name,
      address: data.address,
      description: data.description
    });
  }

  getUnitById(id: number): Observable<any> {
    return this.http.get('https://knowledgehub.demopolyct.online/api/unit/' + id);
  }

  putUnit(data: Iunit, id: string): Observable<any> {
    return this.http.put('https://knowledgehub.demopolyct.online/api/unit/' + id, {
      name: data.name,
      address: data.address,
      description: data.description
    });
  }

  deleteUnit(id: string): Observable<any> {
    return this.http.delete('https://knowledgehub.demopolyct.online/api/unit/' + id);
  }
}
