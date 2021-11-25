<p align="center">
    <h1 align="center">
        InterRep identities
    </h1>
    <p align="center">A simple JS function to create InterRep identities by deriving them from Ethereum accounts.</p>
</p>

<p align="center">
    <a href="https://github.com/InterRep">
        <img src="https://img.shields.io/badge/project-InterRep-blue.svg?style=flat-square">
    </a>
    <a href="https://github.com/interrep/interrep.js/blob/main/LICENSE">
        <img alt="Github license" src="https://img.shields.io/github/license/interrep/interrep.js.svg?style=flat-square">
    </a>
    <a href="https://www.npmjs.com/package/@interrep/identity">
        <img alt="NPM version" src="https://img.shields.io/npm/v/@interrep/identity?style=flat-square" />
    </a>
    <a href="https://npmjs.org/package/@interrep/identity">
        <img alt="Downloads" src="https://img.shields.io/npm/dm/@interrep/identity.svg?style=flat-square" />
    </a>
    <a href="https://bundlephobia.com/package/@interrep/identity">
        <img alt="npm bundle size (scoped)" src="https://img.shields.io/bundlephobia/minzip/@interrep/identity" />
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
        <a href="https://js.interrep.link/identity">
            🕹 Demo
        </a>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
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
npm i @interrep/identity --save
```

or yarn:

```bash
yarn add @interrep/identity
```

## 📜 Usage

\# **identity**(sign: _(message: string) => Promise\<string\>_, provider: _string_, nonce?: _number_): _ZKIdentity_

```typescript
import createIdentity from "@interrep/identity"
import { ZkIdentity } from "@libsem/identity"
import detectEthereumProvider from "@metamask/detect-provider"
import { ethers } from "ethers"

const ethereumProvider = (await detectEthereumProvider()) as any
const provider = new ethers.providers.Web3Provider(ethereumProvider)
const signer = provider.getSigner()

const identity: ZkIdentity = await createIdentity((message) => signer.signMessage(message), "twitter")
```
