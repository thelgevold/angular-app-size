import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class FriendService {
  constructor(private http:Http) {}

  getFriends() {
    return this.http
               .get('./friends1.json')
               .map(res => res.json());
  }

  getFriendsSequentially() {
    return this.http
               .get('./friends1.json')
               .map((res: Response) => res.json().friends)
               .flatMap(friends => this.http.get('./friends1.json')
                                            .map((res: Response) => [...friends, ...res.json().friends]));
  }

  getFriendsInParallel() {
    return Observable.forkJoin(
      this.http.get('./friends1.json').map((res: Response) => res.json()),
      this.http.get('./friends2.json').map((res: Response) => res.json())
    );
  }
}