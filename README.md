# CacheMap

A data structure to stop the thundering herd 🐎🐎🐎

```typescript
type CacheMap<T> = Map<string, Promise<T>>
```
Cache expensive network queries instead of their results.
