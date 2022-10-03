import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide : 0,
    slidesPerView:1,
    centeredSlides: true,
    speed: 400

  };
  slides =[{
    title: "Escucha tu musica",
    subTitle: "En cualquier lugar",
    description: "Irure sit aliqua non do minim cillum nulla.",
    icon: "play"
  },{
    title: "Disfruta de nuestro reproductor",
    subTitle: "De videos increibles",
    description:"Elit occaecat duis ea nisi laborum cillum eiusmod do dolore.",
    icon: "play"
  },{
    title: "Accede al exclusivo",
    subTitle: "si",
    description:"Ullamco non aliqua pariatur eiusmod sit ad elit nulla.",
    icon: "play"}]

  constructor(private router: Router, private storage:  Storage) { }

  finish(){
    this.storage.set("isIntroShowed",true);
    this.router.navigateByUrl("/login")
  }
  async ngOnInit() {
    await this.storage.create();
  }

}
