import { Component, ViewChildren } from "@angular/core";

const testImage =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-big-colorful-elephant-kovacs-anna-brigitta.jpg";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // name = 'Angular 6';

  // http://kaddih.com/assets/images/small/symptom2_s.jpg

  gridItems = [
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage },
    { type: "IMAGE", src: testImage }
  ];
}
