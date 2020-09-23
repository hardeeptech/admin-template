import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  setUserData(userdata){
      localStorage.setItem("username", userdata.username)
  }

  removeUserData()
  {
    localStorage.removeItem("username")
  }

  getUserData(){
    if (localStorage.getItem("username") != null) {
        return localStorage.getItem("username")
    } else {
      return null
    }
  }
}
