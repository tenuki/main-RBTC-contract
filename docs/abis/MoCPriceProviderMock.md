---
id: version-0.1.10-MoCPriceProviderMock
title: MoCPriceProviderMock
original_id: MoCPriceProviderMock
---

# MoCPriceProviderMock.sol

View Source: [contracts/mocks/MoCPriceProviderMock.sol](../../contracts/mocks/MoCPriceProviderMock.sol)

**↗ Extends: [PriceFeed](PriceFeed.md), [PriceProvider](PriceProvider.md)**

**MoCPriceProviderMock** - version: 0.1.10

## Contract Members
**Constants & Variables**

```js
bytes32 internal mocPrice;
```
---

```js
bool internal has;
```
---

## Functions

- [(uint256 price)](#)
- [peek()](#peek)
- [poke(uint128 val_, uint32 )](#poke)
- [post(uint128 val_, uint32 , address )](#post)

### 

Constructor

```js
function (uint256 price) public nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| price | uint256 | MoC price for mock contract | 

### peek

⤾ overrides [PriceProvider.peek](PriceProvider.md#peek)

```js
function peek() external view
returns(bytes32, bool)
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|

### poke

⤾ overrides [PriceFeed.poke](PriceFeed.md#poke)

```js
function poke(uint128 val_, uint32 ) external nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| val_ | uint128 |  | 
|  | uint32 |  | 

### post

⤾ overrides [PriceFeed.post](PriceFeed.md#post)

```js
function post(uint128 val_, uint32 , address ) external nonpayable
```

**Arguments**

| Name        | Type           | Description  |
| ------------- |------------- | -----|
| val_ | uint128 |  | 
|  | uint32 |  | 
|  | address |  | 

