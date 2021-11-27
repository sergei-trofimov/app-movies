export type RaitingT = {
  [key: string]: string;
  Source: string;
  Value: string;
};

export interface MovieI {
  [key: string]: any;
  Actors: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  Genre: string;
  Plot: string;
  Poster: string;
  Ratings: RaitingT[];
  Released: string;
  Runtime: string;
  Title: string;
  Year: string;
  ImdbID: string;
  ImdbRating: string;
}
