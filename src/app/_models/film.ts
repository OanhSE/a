export class Film{
  id: number;
  name: string;
  duration: number;
  genres: string;
  actor: string;
  year: string;
  startFrom: Date;
  category: string;
  language: string;
  description: string;
  image: string;
  urltrailer: string;
  status: number;
  // startdate: Date;
  // imageLandscape: string ;
  // trailer: string ;


  constructor(id: number, name: string, duration: number,
              genres: string, actor: string, year: string, startFrom: Date,
              category: string, language: string, description: string, image: string,
              urltrailer: string, status: number) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.genres = genres;
    this.actor = actor;
    this.year = year;
    this.startFrom = startFrom;
    this.category = category;
    this.language = language;
    this.description = description;
    this.image = image;
    this.urltrailer = urltrailer;
    this.status = status;
  }
}
