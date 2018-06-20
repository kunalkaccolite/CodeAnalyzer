import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-code',
  templateUrl: './upload-code.component.html',
  styleUrls: ['./upload-code.component.scss']
})
export class UploadCodeComponent implements OnInit {

  fileAttached: File;
  langSelected: boolean;
  langs = [
    {value: 'C', viewValue: 'C'},
    {value: 'C++', viewValue: 'C++'},
    {value: 'Java', viewValue: 'Java'}
  ];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  openInput(){ 
    document.getElementById("fileInput").click();
  }

  fileChange(files: File[]) {
    if (files.length > 0) {
      this.fileAttached = files[0];
      console.log('file attached');
    }
    
  }

  selectCompiler(event) {
    console.log(event.value);
    this.langSelected = true;
    console.log('compiler selected');
  }

   upload() {
    console.log('sending this to server', this.fileAttached);
    let formData = new FormData();
    formData.append('file', this.fileAttached);
    this.http.post('http://localhost:3000/upload',formData).subscribe(data =>{

    });
  }

  
}