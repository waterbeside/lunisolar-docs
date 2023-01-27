# 地支

通过SB实例的branch属性可取得天干对象Branch

```typescript
const branch = lunisolar().char8.year.branch // 取得年柱的SB实例
```

## 地支名

```typescript
/**
 * @return {string}
 */
branch.name
```

## 地支索引

```typescript
/**
 * @return {number}
 */
branch.value
```

## 地支五行

返回五行对象实例 Element5

```typescript
/**
 * @return {Element5}
 */
branch.e5
```

## 地支藏干

取得地支所藏的天干对象列表，长度最多3个，分别为 `[本气, 中 气, 余气]`

```typescript
/**
 * @return {Stem[]}
 */
branch.hiddenStems
```

## 三合地支

三合地支, 返回当前地支的另外两个与之三合的地支

```typescript
/**
 * @return {[Branch, Branch]}
 */
branch.triad
```

## 三合地支五行

三合的五行属性

```typescript
/**
 * @return {Element5}
 */
branch.triadE5
```

## 六合地支

```typescript
/**
 * @return {Branch}
 */
branch.group6
```

## 六合地支五行

```typescript
/**
 * @return {Elment5}
 */
branch.group6E5
```

## 相刑

取得所刑的地支

```typescript
/**
 * @return {Branch}
 */
branch.punishing
```

取得被什么地支所刑

```typescript
/**
 * @return {Branch}
 */
branch.punishBy
```

## 相冲

```typescript
/**
 * @return {Branch}
 */
branch.conflict
```

## 相破

```typescript
/**
 * @return {Branch}
 */
branch.destroying
```

## 相害

```typescript
/**
 * @return {Branch}
 */
branch.harming
```

## 十二地支列表

此为静态方法， 取得十二地支名称列表

```typescript
/**
 * @return {string[]}
 */
lunisolar.Branch.getNames()
```
