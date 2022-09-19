# CacheMap

A data structure to stop the thundering herd 🐎🐎🐎

```typescript
type CacheMap<K, V> = Map<K, Promise<V>>
```
Cache expensive network queries instead of their results.
