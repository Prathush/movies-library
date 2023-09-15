import { Pipe, PipeTransform } from '@angular/core';
import * as translations from './translations.json';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  private readonly keys = Object.keys(translations);
  readonly GENERIC_ERROR_MESSAGE_KEY = 'generic-error';
  transform(key: string): string {
    if (this.keys.find(k => k == key)) {
      return translations[key];
    }
    return translations[this.GENERIC_ERROR_MESSAGE_KEY] ?? key;
  }
}
