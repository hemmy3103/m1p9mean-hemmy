export interface IUserSignUp {
  nomUtilisateur: string,
  mdp?: string,
  nom: string,
  prenom: string,
}

export interface IUserLogin {
  nomUtilisateur: string,
  mdp: string,
}

export interface IRestaurant {
  _id?: string;
  nom: string,
  description?: string,
  adress?: string,
  img?: string,
}

export interface IDish extends IRestaurant {
  cout: number
  prix: number
  visible?: boolean
  id_restaurant?:string
}

export interface IOrder {
  restaurant?: string,
  dish: string,
  prix: number,
  quantity: number,
  montant: number,
  cout?: number,
  visible?: boolean,
  dateOrder?: Date,
  adressDelivery?: string,
  dateDelivery?: Date
}
