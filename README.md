# PromiseMap

A data structure to stop the thundering herd 🐎🐎🐎

```typescript
type PromiseMap<Key, Value> = Map<Key, Promise<Value>>
```
Cache expensive requests instead of their results.
