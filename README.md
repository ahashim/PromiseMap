# PromiseMap

A data structure to stop the thundering herd 🐎🐎🐎

```typescript
type PromiseMap<Key, Value> = Map<Key, Promise<Value>>
```
Cache expensive requests instead of their results.

## Benchmarks

* Install dependencies: `npm install`
* Run benchmarks: `npm benchmark`

```
Data
==============================================================
data: {
  avatar: 'https://ahmedhashim.app/images/low_poly_avatar.png',
  bio: 'definitely not a bot',
  id: 1,
  joined: 1663424830,
  location: { latitude: -27.09962924203303, longitude: -109.34637304606693 },
  username: 'ahmed'
}


Using an ordinary Map
==============================================================
requests: 50
cache misses: 50


Using a PromiseMap
==============================================================
requests: 50
cache misses: 1
```
