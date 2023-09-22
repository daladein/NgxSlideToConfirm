# SlideToConfirm

Slide to confirm a good alternative to confirmation box.A customizable slider that will activate a callback when the user slides it to 100%.

![SlideToConfirm](https://github.com/rinturaj/NgxSlideToConfirm/blob/main/projects/slide-to-confirm/example.gif)


## Installation

```bash
npm install ngx-slide-to-confirm --save
```

## Usage
Import the module:

```typescript
import {  SlideToConfirmModule } from 'ngx-slide-to-confirm';

@NgModule({
  
    imports: [ SlideToConfirmModule],

  
})
export class AppModule {
}
```
```html

  <ngx-slide-to-confirm placeHolder="Slide to confirm" (confirmEvent)="onConfirm()"></ngx-slide-to-confirm>

```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
## Build

Run `ng build SlideToConfirm` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build SlideToConfirm`, go to the dist folder `cd dist/slide-to-confirm` and run `npm publish`.

## Running unit tests

Run `ng test SlideToConfirm` to execute the unit tests via [Karma](https://karma-runner.github.io).


