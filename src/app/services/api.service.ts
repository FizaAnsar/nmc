import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  Department,
  Login,
  Stores,
  Supplier,
  Vehicles,
} from '../Model/data-type';
import { BehaviorSubject, Subject } from 'rxjs';
import { config } from './config';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  token: any;
  _server = 'http://192.168.10.215:8080/handi-ear/api/user/login?';
  baseUrl = 'http://192.168.10.215:8081/nmc-api/';

  constructor(private http: HttpClient, private router: Router) {
    // JSON.parse(localStorage.getItem('API'));
    // console.log(JSON.parse(localStorage.getItem('API')))
  }

  ///////////////////////////////////////////////////// Login ///////////////////////////////////////////////
  userLogin(data: Login) {
    return this.http.get(`${config.server}${config.domain}user/login?username=${data.username}&password=${data.password}`)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.token = res;
          console.log('token', this.token.auth_token);
          localStorage.setItem('auth_token', this.token.auth_token);
          this.router.navigate([
            'fuel',
            { outlets: { metroCity: ['dashboard'] } },
          ]);
        },
        error: (err) => {
          console.log(err.error);
          alert('Invalid username/password');
        },
      });
  }

  ///////////////////////////////////////////////////// Logout ///////////////////////////////////////////////
  removeTokenOnLogout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }

  ///////////////////////////////////////////////////// Purchase ///////////////////////////////////////////////

  //-----------------get Purchase-------------------------------------------- //
  getPurchase() {
    return this.http.get(`${this.baseUrl}purchase/all`);
  }

  //-----------------Add Purchase-------------------------------------------- //

  addPurchase(purchase: any) {
    return this.http.post<any>(`${this.baseUrl}purchase/add`, purchase);
  }

  //-----------------Update Purchase-------------------------------------------- //
  updatePurchase(info) {
    return this.http.put<any>(`${this.baseUrl}purchase/update`, info);
  }

  //-----------------Delete Purchase-------------------------------------------- //

  deletePurchase(id) {
    return this.http.delete<any>(`${this.baseUrl}purchase/delete/${id}`, id);
  }

  ///////////////////////////////////////////////////// Supplier ///////////////////////////////////////////////

  //-----------------get Supplier-------------------------------------------- //
  getSupplier() {
    return this.http.get(`${this.baseUrl}suplier/all`);
  }

  //-----------------Add Supplier-------------------------------------------- //
  addSupplier(suplier: Supplier) {
    return this.http.post<any>(`${this.baseUrl}suplier/add`, suplier);
  }

  //-----------------Update Supplier-------------------------------------------- //
  updateSupplier(info) {
    return this.http.put<any>(`${this.baseUrl}suplier/update`, info);
  }

  //-----------------Delete Supplier-------------------------------------------- //

  deleteSupplier(id) {
    return this.http.delete<any>(`${this.baseUrl}suplier/delete/${id}`, id);
  }

  ///////////////////////////////////////////////////// Departments ///////////////////////////////////////////////

  //-----------------get Department-------------------------------------------- //
  getDepartment() {
    return this.http.get(`${this.baseUrl}department/all`);
  }

  //-----------------add Department-------------------------------------------- //
  addDepartment(department: Department) {
    return this.http.post<any>(`${this.baseUrl}department/add`, department);
  }

  //-----------------Update Department-------------------------------------------- //
  updateDepartment(info) {
    return this.http.put<any>(`${this.baseUrl}department/update`, info);
  }

  //-----------------Delete Department-------------------------------------------- //

  deleteDepartment(id) {
    return this.http.delete<any>(`${this.baseUrl}department/delete/${id}`, id);
  }

  ///////////////////////////////////////////////////// Vehicles ///////////////////////////////////////////////

  //-----------------get Vehicle-------------------------------------------- //
  getVehicle() {
    return this.http.get(`${this.baseUrl}vehicle/all`);
  }

  //-----------------add Vehicle-------------------------------------------- //
  addVehicle(vehicle: Vehicles) {
    return this.http.post<any>(`${this.baseUrl}vehicle/add`, vehicle);
  }

  //-----------------Update Vehicle-------------------------------------------- //
  updateVehicle(info) {
    console.log(info, 'info');
    return this.http.put<any>(`${this.baseUrl}vehicle/update`, info);
  }

  //-----------------Delete Vehicle-------------------------------------------- //
  deleteVehicle(id) {
    return this.http.delete<any>(`${this.baseUrl}vehicle/delete/${id}`, id);
  }

  ///////////////////////////////////////////////////// User ///////////////////////////////////////////////

  //-----------------get User-------------------------------------------- //
  getUser() {
    return this.http.get(`${this.baseUrl}user/all`);
  }

  //-----------------add User-------------------------------------------- //
  addUser(user: any) {
    return this.http.post<any>(`${this.baseUrl}user/add`, user);
  }

  //-----------------Update User-------------------------------------------- //
  updateUser(info) {
    return this.http.put<any>(`${this.baseUrl}user/update`, info);
  }

  //-----------------Delete User-------------------------------------------- //

  deleteUser(id) {
    return this.http.delete<any>(`${this.baseUrl}user/delete/${id}`, id);
  }

  ///////////////////////////////////////////////////// Stores ///////////////////////////////////////////////

  //-----------------get Stores-------------------------------------------- //
  getStores() {
    return this.http.get(`${this.baseUrl}store/all`);
  }

  //-----------------add Stores-------------------------------------------- //
  addStores(stores: Stores) {
    return this.http.post<any>(`${this.baseUrl}store/add`, stores);
  }

  //-----------------Update Vehicle-------------------------------------------- //
  updateStores(info) {
    return this.http.put<any>(`${this.baseUrl}store/update`, info);
  }

  //-----------------Delete Stores-------------------------------------------- //

  deleteStores(id) {
    return this.http.delete<any>(`${this.baseUrl}store/delete/${id}`, id);
  }

    /////////////issuance pending requests send on demand status/////////////////////////////////
    pRequest = new Subject();
    sendRequest(data: any) {
      this.pRequest.next(data);
      console.log(data)
    //  localStorage.setItem("API",JSON.stringify(data))
    }
    receiveRequests() {
      return this.pRequest.asObservable();
    }
   
}
