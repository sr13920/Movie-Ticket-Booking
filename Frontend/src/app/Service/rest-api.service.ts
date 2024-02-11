import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  token:String="";
  url:String="http://13.233.46.19:8090/moviebookingapp";
  constructor(private http: HttpClient) { }


  public doRegistration(user: any) {
    return this.http.post(this.url+"/register", user);
  }

  public login(username: any, password: any) {
    return this.http.post(this.url+"/login", { username, password }, {"responseType": "text"});
  }

  public getUser(username:any){
    return this.http.get(this.url+"/user/" + username)
  }

  public getAllMovies(){
   
    return this.http.get(this.url+"/all",{
      "headers": {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }

  public bookTicket(ticket:any){
   
    return this.http.post(this.url+"/bookTicket",ticket,{
      "headers": {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }

  public addMovie(movie:any){
    return this.http.post(this.url+"/addMovie",movie,{
      "headers": {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
  }
 
  public deleteMovie(movie:any){
    return this.http.delete(this.url+"/"+movie.movieTheater.movieName+"/"+movie.movieTheater.theaterName+"/delete",{
      "headers": {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }, "responseType": "text"
    })
  }

  public resetPassword(data:any){
     return this.http.post(this.url+"/forgot",data, {"responseType": "text"})
   }

}
