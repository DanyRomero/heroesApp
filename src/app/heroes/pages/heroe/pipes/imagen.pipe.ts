import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from 'src/app/heroes/interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false,
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (!heroe.id && !heroe.alt_img) {
      return 'https://i.pinimg.com/564x/2a/c6/71/2ac671d6f3bbe7ba4da4f264976a761d.jpg';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
