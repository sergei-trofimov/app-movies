export interface UserI {
  [key: string]: any;
  id: number;
  firstName: string;
  lastName?: string;
  email: string;
  favouriteMovies: string[];
}
