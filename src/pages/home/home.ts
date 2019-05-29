import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  encodText: string = '';
  encodeData: any = {};
  scannedData: any = {};


  constructor(public navCtrl: NavController, public scanner: BarcodeScanner) {

  }

  scan() {
    this.options = {
      prompt:'Scaneie o QRCODE'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Erro: ', err);
    })
  }
  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodeData = data;
    }, (err) => {
      console.log('Erro: ', err);
    })
  }
}

