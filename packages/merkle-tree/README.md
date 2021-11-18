<p align="center">
    <h1 align="center">
        InterRep Merkle Tree
    </h1>
    <p align="center">InterRep Merkle tree implementation in TypeScript.</p>
</p>

<p align="center">
    <a href="https://github.com/InterRep">
        <img src="https://img.shields.io/badge/project-InterRep-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/interrep/interrep.js/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/interrep/interrep.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@interrep/merkle-tree">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@interrep/merkle-tree?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@interrep/merkle-tree">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@interrep/merkle-tree.svg?style=flat-square" />
    </a>
    <a href="https://bundlephobia.com/package/@interrep/merkle-tree">
        <img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/minzip/@interrep/merkle-tree" />
    </a>
    <a href="https://eslint.org/">
        <img alt="Linter eslint" src="https://img.shields.io/badge/linter-eslint-8080f2?style=flat-square&logo=eslint" />
    </a>
    <a href="https://prettier.io/">
        <img alt="Code style prettier" src="https://img.shields.io/badge/code%20style-prettier-f8bc45?style=flat-square&logo=prettier" />
    </a>
</p>

<div align="center">
    <h4>
        <a href="https://docs.interrep.link/contributing">
            👥 Contributing
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://docs.interrep.link/code-of-conduct">
            🤝 Code of conduct
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <a href="https://t.me/interrep">
            🗣️ Chat &amp; Support
        </a>
    </h4>
</div>

---

## 🛠 Install

### npm or yarn

Install the `@interrep/semithid` package with npm:

```bash
npm i @interrep/merkle-tree --save
```

or yarn:

```bash
yarn add @interrep/merkle-tree
```

### CDN

You can also load it using a `script` tag using [unpkg](https://unpkg.com/):

```html
<script src="https://unpkg.com/@interrep/merkle-tree/"></script>
```

or [JSDelivr](https://www.jsdelivr.com/):

```html
<script src="https://cdn.jsdelivr.net/npm/@interrep/merkle-tree/"></script>
```

## 📜 Usage

\# **new MerkleTree**(hash: _HashFunction_, depth: _number_, zero?: _BigInt_): _MerkleTree_

```typescript
import { MerkleTree } from "@interrep/merkle-tree"
import { poseidon } from "circomlibjs" // v0.0.8

const tree = new MerkleTree(poseidon, 16)

console.log(tree.root) // 19217088683336594659449020493828377907203207941212636669271704950158751593251
```

\# **insert**(leaf: _BigInt_)

```typescript
tree.insert(BigInt(1))

console.log(tree.root) // 16211261537006706331557500769845541584780950636316907182067421710925347020533
```

\# **delete**(index: _number_)

```typescript
tree.delete(0)

console.log(tree.root) // 19217088683336594659449020493828377907203207941212636669271704950158751593251
```

\# **indexOf**(leaf: _BigInt_): _number_

```typescript
tree.insert(BigInt(2))

const index = tree.indexOf(BigInt(2))

console.log(index) // 1
// The first element is the previously deleted leaf = 0.
```

\# **createProof**(index: _number_): _Proof_

```typescript
const proof = tree.createProof(1)

console.log(proof)
/*
{
    root: 2187155820074874614256666533049960968550634565313477432886010125943412357599n,
    leaf: 2n,
    siblingNodes: [
        0n,
        14744269619966411208579211824598458697587494354926760081771325075741142829156n,
        7423237065226347324353380772367382631490014989348495481811164164159255474657n,
        11286972368698509976183087595462810875513684078608517520839298933882497716792n,
        3607627140608796879659380071776844901612302623152076817094415224584923813162n,
        19712377064642672829441595136074946683621277828620209496774504837737984048981n,
        20775607673010627194014556968476266066927294572720319469184847051418138353016n,
        3396914609616007258851405644437304192397291162432396347162513310381425243293n,
        21551820661461729022865262380882070649935529853313286572328683688269863701601n,
        6573136701248752079028194407151022595060682063033565181951145966236778420039n,
        12413880268183407374852357075976609371175688755676981206018884971008854919922n,
        14271763308400718165336499097156975241954733520325982997864342600795471836726n,
        20066985985293572387227381049700832219069292839614107140851619262827735677018n,
        9394776414966240069580838672673694685292165040808226440647796406499139370960n,
        11331146992410411304059858900317123658895005918277453009197229807340014528524n,
        15819538789928229930262697811477882737253464456578333862691129291651619515538n
    ],
    path: [
        1, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0,
        0, 0, 0, 0
    ]
}
*/
```

\# **verifyProof**(proof: _Proof_): _boolean_

```typescript
console.log(tree.verifyProof(proof)) // true
```
