import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(images: string[]): string {
    return images[Math.floor(Math.random() * images.length)];
  }

}
