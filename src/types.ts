export type AccountData = {
  [key: string]: Location | number | string;
};

// CacheMap generic
export type CacheMap<T> = Map<string, Promise<T>>;

type Location = {
  latitude: number;
  longitude: number;
};
