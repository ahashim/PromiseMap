export type PromiseMap<K, V> = Map<K, Promise<V>>;

export type UserProfile = {
  [key: string]: Location | number | string;
};

type Location = {
  latitude: number;
  longitude: number;
};
