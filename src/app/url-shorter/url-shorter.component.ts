import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShortenerService } from '../services/shortener.service';
import { IUrlData } from '../models/urlData.model';
import { AWS_API } from '../consts/urlConsts';

@Component({
  selector: 'app-url-shorter',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './url-shorter.component.html',
  styleUrl: './url-shorter.component.scss',
})
export class UrlShorterComponent{

  urlForm: FormControl;
  shortened: string = AWS_API;
  isShortened: boolean = false;
  constructor(private shortener: ShortenerService){
    this.urlForm = new FormControl('', [Validators.required]);
  }

submit() {
  if (this.urlForm.valid) {
    const urlToShorten = this.urlForm.value;
    const expirationTime = Date.now() + 432000000;

    const urlData: IUrlData = {
      originalUrl: urlToShorten,
      expirationTime: expirationTime.toString()
    };

    this.shortener.generateShortenUrl(urlData).subscribe(
      (res) => {
        this.shortened = `${AWS_API}${res.code}`;
        this.isShortened = true;
        this.urlForm.patchValue('')
      },
      (error) => {
        console.error('Error generating shortened URL:', error);
      }
    );
  } else {
    console.error('Invalid URL');
  }
}

}
