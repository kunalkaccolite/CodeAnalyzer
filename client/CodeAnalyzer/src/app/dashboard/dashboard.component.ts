import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fileAttached: File;
  fileUploaded: boolean;
  button1:any = false;
  button2:any = false;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.button1 = localStorage.getItem('button1') === 'undefined' ? false: localStorage.getItem('button1');
    this.button2 = localStorage.getItem('button2') === 'undefined' ? false: localStorage.getItem('button2');

  }
  fileChange(files: File[], id:any) {
    if (files.length > 0) {
      this.fileAttached = files[0];
      console.log('file attached');
    }
    console.log('sending this to server', this.fileAttached);
    let formData = new FormData();
    formData.append('file', this.fileAttached);
    this.http.post('http://localhost:3000/upload',formData).subscribe(data =>{
     
    });
    //this.fileUploaded=true;
    if(id ==='button1'){
    this.button1 = true;
    localStorage.setItem('button1','true');
    
    }
    if(id === 'button2')
    {
      this.button2 = true;
      localStorage.setItem('button2','true');
    }
  }

  openInput(event,id:any){ 
    if(id==='fileInput1')
    {
    document.getElementById("fileInput1").click();
    }
    if(id === 'fileInput2')
    {
      document.getElementById("fileInput2").click();
    }
}
  download(){
    window.open('http://localhost:3000/download/skeleton');
  }

}
