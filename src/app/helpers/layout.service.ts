import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

// tslint:disable-next-line: variable-name
  private static _height: string;
// tslint:disable-next-line: variable-name
  private static _heightNumber: number;

  public static get height(): string {
    return this._height;
  }

  public static set height(v: string) {
    this._heightNumber = +v;
    this._height = v + 'px';
  }
  public static get heightNumber(): number {
    return this._heightNumber;
  }
  public static set heightNumber(v: number) {
    this._heightNumber = v;
  }

  public static getHeightScreenArea(): string {
    return LayoutService.heightNumber - 100 + 'px';
  }

  public static getHeightScreenAreaWithPercentage(porcentagem: number): any {
    if (porcentagem < 0) {
      porcentagem = 0;
    } else if (porcentagem > 100) {
      porcentagem = 100;
    }

    if (porcentagem === 0) {
      return '0px';
    }

    if (isNaN(LayoutService.heightNumber)) {
      LayoutService.heightNumber = Number(window.screen.availHeight) - 50;
    }
    const valor = Math.round(
      (porcentagem * (LayoutService.heightNumber - 100)) / 100
    );
    return valor + 'px';
  }
}
