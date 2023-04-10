---
draft: false
title: "Identify OSS Supply Chain Risks in Java Apps using vet"
snippet: "Any modern Java application using popular frameworks like Spring extensively depends on external libraries from the open sources. In this blog we learn to identify security risks in OSS dependencies in Java applications using vet"
publishDate: "2023-04-10 18:11"
image: {
  src: "https://raw.githubusercontent.com/safedep/vet/main/docs/static/img/vet/vet-banner.png",
  alt: "SafeDep vet"
}
category: "SafeDep"
author: "Abhisek Datta"
tags: [SafeDep, vet, OSS, Security, Java, Maven, Gradle]
---

## What is vet?

`vet` is a tool for identifying risks in OSS supply chain. Refer to
[quickstart](https://docs.safedep.io/quick-start) for instructions to setup `vet` in your system.

## How to setup vet?

> You can skip this section if you already have `vet` setup and configured

The easiest way to get started is to download a precompiled binary from [Github
Releases](https://github.com/safedep/vet/releases) or by using `homebrew`

```bash
brew tap safedep/tap
```

```bash
brew install safedep/tap/vet
```

`vet` needs an API key to fetch enrichment data from backend. Get one sent to
your email address

```bash
vet auth trial --email john.doe@example.com
```

> You will receive an API key in your email

Configure `vet` to use the API key

```bash
vet auth configure
```

Verify setup and API key

```bash
vet auth verify
```

## Analysing Java App

> The instructions here assumes `vet` is installed and setup with an API key.

Clone `demo-java-client` which is a Java Springboot application with
intentionally risky dependencies

```bash
git clone https://github.com/safedep/demo-client-java
```

Switch to the app directory

```bash
cd demo-client-java
```

Run a quick scan using `vet` to identify top risks

```bash
vet scan --json-dump-dir /tmp/dcj-dump
```

> You can optionally using `--transitive` argument to enable transitive
> dependency resolution during scan

TODO: Post output image here

`vet` uses an opinionated workflow to identify and prioritised risky OSS
libraries identified in the project. However the [query workflow](https://docs.safedep.io/advanced/build-your-own-querie)
can be used to slice and dice on raw data to identify risky dependencies.

Identify dependencies with critical or high vulnerabilities

```bash
vet query --from /tmp/dcj-dump --filter 'vulns.critical.exists(p, true) || vulns.high.exists(p, true)'
```

Produces output

```text
┌───────────┬───────────────────────────────────────────────────┬─────────┬────────────────────────────────────────────────────────────┐
│ ECOSYSTEM │ PACKAGE                                           │ VERSION │ SOURCE                                                     │
├───────────┼───────────────────────────────────────────────────┼─────────┼────────────────────────────────────────────────────────────┤
│ Maven     │ com.fasterxml.jackson.core:jackson-databind       │ 2.13.4  │ https://github.com/fasterxml/jackson-databind              │
│ Maven     │ commons-fileupload:commons-fileupload             │ 1.4     │ https://issues.apache.org/jira/projects/FILEUPLOAD/summary │
│ Maven     │ net.minidev:json-smart                            │ 2.4.8   │ https://github.com/netplex/json-smart-v2                   │
│ Maven     │ org.springframework.security:spring-security-core │ 5.7.3   │ https://github.com/spring-projects/spring-security         │
│ Maven     │ org.yaml:snakeyaml                                │ 1.30    │ https://bitbucket.org/snakeyaml/snakeyaml                  │
└───────────┴───────────────────────────────────────────────────┴─────────┴────────────────────────────────────────────────────────────┘
```

Identify dependencies with potentially restrictive OSS license

```bash
vet query --from /tmp/dcj-dump --filter 'licenses.exists(p, p == "GPL-2.0")'
```

## Whats next?


