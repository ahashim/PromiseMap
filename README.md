# PromiseMap

A data structure to stop the thundering herd 🐎🐎🐎

```typescript
type PromiseMap<K, V> = Map<K, Promise<V>>
```
Cache expensive requests instead of their results.
