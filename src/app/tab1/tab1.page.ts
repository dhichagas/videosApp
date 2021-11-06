import { IFilme } from './../models/IFilme.model';
import { Router, RouteReuseStrategy, RouterModule } from '@angular/router';
import { DadosService } from './../services/dados.service';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    titulo = 'Videos';

    listaVideos: IFilme[] = [
      {
        nome: 'A Profissional (2021)',
        lancamento: '11/11/2021',
        duracao: '1h 49m',
        classificacao: 76,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/niDrDAUYO8627hwEhE7LV5Z1qXn.jpg',
        generos: ['Ação', 'Crime', 'Thriller'],
        pagina: '/profissional'
      },
      {
        nome: 'Assalto ao Banco da Espanha (2021)',
        lancamento: '26/03/2021',
        duracao: '1h 58m',
        classificacao: 76,
        cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/AhRSv4npEaE8ZvuJh4CmQpsXDZg.jpg',
        generos: ['Crime', 'Ação', 'Thriller'],
        pagina: '/assalto-espanha'
      }
    ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados('filme', filme);
      this.route.navigateByUrl('/dados-filme');
    }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'ALERTA',
      message: 'Deseja reamlente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim! Favoritar!',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
