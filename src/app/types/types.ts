export interface IUserSignUp {
  nomUtilisateur: string,
  mdp: string,
  nom: string,
  prenom: string,
}

export interface IUserLogin {
  nomUtilisateur: string,
  mdp: string,
}

export interface IRestaurant {
  name: string,
  description: string,
  adress?: string,
  image: string,
}

export interface IDish extends IRestaurant {
  cost: number
  price: number
  visible?: boolean
}

export interface IOrder {
  restaurant?: string,
  dish: string,
  price: number,
  quantity: number,
  montant: number,
  cout?: number,
  visible?: boolean,
  dateOrder?: Date
}
