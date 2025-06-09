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
      alert('Erro ao escanear: ' + err);
    })
  }
  encode() {
    if (!this.encodText) {
      alert('Por favor, digite um texto para gerar o QR Code');
      return;
    }
    
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => {
      this.encodeData = data;
      console.log('QR Code gerado com sucesso!');
    }, (err) => {
      console.log('Erro: ', err);
      alert('Erro ao gerar QR Code: ' + err);
    })
  }
}

