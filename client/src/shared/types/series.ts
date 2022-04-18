import { Movie } from "./movie";

export interface Series {
  id?: string;
  userId?: string;
  title?: string;
  description?: string;
  image?: string;
  year?: number;
  seasons: Season[];
}

export interface Season {
  id?: string;
  title?: string;
  seasonNumber?: number;
  year?: number;
  episodes: Episodes[];
}

export interface Episodes {
  id?: string;
  episodeNumber?: number;
  title?: string;
  year?: string;
  rating?: number;
  image?: string;
  plot?: string;
  release?: string;
}
