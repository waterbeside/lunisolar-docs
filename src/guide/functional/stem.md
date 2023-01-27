
# 天干

通过SB实例的stem属性可取得天干对象Stem

```typescript
// 例如，取得年柱的天干
const stem = lunisolar().char8.year.stem
```

## 天干名

```typescript
/**
 * @return {string}
 */
stem.name
```

## 天干索引

```typescript
/**
 * @return {string}
 */
stem.name
```

## 天干五行

返回五行对象实例 Element5

```typescript
/**
 * @return {Element5}
 */
stem.e5
```

## 天干纳甲

取得天干所纳八卦，返回 Trigram8 八卦实例

```typescript
/**
 * @return {Trigram8}
 */
stem.trigram8
```

## 十天干列表

此为静态方法， 取得十天干名称列表

```typescript
/**
 * @return {string[]}
 */
lunisolar.Stem.getNames()
```
