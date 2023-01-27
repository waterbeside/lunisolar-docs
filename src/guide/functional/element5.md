
# 五行

天干对象或地支对象都有e5属性，返回一个五行实例: **Element5**

```typescript
// 例如，取得日柱天干的五行
const e5 = lunisolar().char8.day.stem.e5
```

## 五行名

取得五行名称，如 '木'

```typescript
/**
 * @return {string}
 */
e5.name
```

## 五行索引

取得五行索引，范围[0, 4], 依次为'木、火、土、金、水',

```typescript
/**
 * @return {number}
 */
e5.value
```

## 相生

取得**相生**（我生者）的五行

```typescript
/**
 * @return {Element5}
 */
e5.generating()
```

## 相克

取得**相克**（我克者）的五行

```typescript
/**
 * @return {Element5}
 */
e5.overcoming()
```

## 相泄

取得**相泄**（生我者）的五行

```typescript
/**
 * @return {Element5}
 */
e5.weakening()
```

## 相侮

取得**相侮**（克我者）的五行

```typescript
/**
 * @return {Element5}
 */
e5.counteracting()
```
