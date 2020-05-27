import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IoTBot Control App';
  introText = 'This device is based on:'
  totalAngularPackages;

  ipAddress;
  port;

  speed;

  constructor(private http: HttpClient) { }

  setIP(ipValue) {
    this.ipAddress = ipValue;
  }
  setPort(portValue) {
    this.port = portValue;
  }
  setSpeed(speedValue) {
    this.speed = speedValue;
  }
  goForward() {
    this.http.get<any>('http://' + this.ipAddress + ':' + this.port + '/goForward?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
      console.log(this.totalAngularPackages);
    })
  }
  rotateLeft() {
    this.http.get<any>('http://' + this.ipAddress + ':' + this.port + '/rotateLeft?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  rotateRight() {
    this.http.get<any>('http://' + this.ipAddress + ':' + this.port + '/rotateRight?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  goBackward() {
    this.http.get<any>('http://' + this.ipAddress + ':' + this.port + '/goBackward?' + 'speed=' + this.speed).subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
  fullStop() {
    this.http.get<any>('http://' + this.ipAddress + ':' + this.port + '/fullStop?').subscribe(data => {
      this.totalAngularPackages = data.total;
    })
  }
}
