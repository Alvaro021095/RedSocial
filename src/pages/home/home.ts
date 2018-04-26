import { comentario } from './../../comentario.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	comentarios: comentario[] = [];
	bool: string = '0';
	constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

	addCommentary() {
		let prompt = this.alertCtrl.create({
			title: 'Comentario',
			message: 'Ingrese su comentario',
			inputs: [
				{
					name: 'comment',
					placeholder: 'Comentario'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					handler: (data) => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Guardar',
					handler: (data) => {
						console.log(data);
						this.comentarios.push({ comment: data.comment });
						this.bool = '1';
						console.log(this.bool);
					}
				}
			]
		});
		prompt.present();
	}

	showAlertHeart() {
		let alert = this.alertCtrl.create({
			title: 'Me gusta!',
			subTitle: 'Has dado click a una publicación que te gusto.!',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	showAlertCommentary() {
		let alert = this.alertCtrl.create({
			title: 'Comentario!',
			subTitle: 'Vas a hacer un comentario, no insultes!',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	showAlertshared() {
		let alert = this.alertCtrl.create({
			title: 'Compartir!',
			subTitle: 'Compartelo con quien quieras.. esta publicación',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	showAlertGuarded() {
		let alert = this.alertCtrl.create({
			title: 'Guardado!',
			subTitle: 'Esta publicación quedara solo en tus registros',
			buttons: [ 'OK' ]
		});
		alert.present();
	}
}
