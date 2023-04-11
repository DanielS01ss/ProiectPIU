import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {


  readonly baseUrl = "http://localhost:44385/api/item";

  //https://localhost:44385/api/item/getItems/{id}
  //https://localhost:44385/api/item/post
  //https://localhost:44385/api/item/delete/{id}
  //https://localhost:44385/api/item/edit/{id}

  constructor(public httpClient:HttpClient) { 

  }

  getItems():Observable<Item[]>{
    return this.httpClient.get(this.baseUrl+"get") as Observable<Item[]>;
  }

  getItemById(id:Number):Item{
    return this.httpClient.get(this.baseUrl+"getItems/"+id) as Item;
  }

  postItem(item:Array<Item>):Observable<Item>{
    return this.httpClient.post(this.baseUrl+"post",item) as Observable<Item>;
  }

  deleteItem(id:Number):Observable<null>{
    return this.httpClient.post(this.baseUrl+"delete/",id) as unknown as Observable<null>;
  }

  createItem(item:Item):Observable<Item>{
    return this.httpClient.post(this.baseUrl+"getItems/",item) as Observable<Item>
  }

  edit(item:Item) :Observable<null>{
    return this.httpClient.put(this.baseUrl+"edit/"+item.id, item) as unknown as Observable<null>;
  }

}
