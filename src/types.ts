export type AccountData = {
  [key: string]: Location | number | string;
};

// CacheMap generic
export type CacheMap<K, V> = Map<K, Promise<V>>;

type Location = {
  latitude: number;
  longitude: number;
};
