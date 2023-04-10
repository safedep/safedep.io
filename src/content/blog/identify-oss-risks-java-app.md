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

![](/images/vet-dcj-summary.png)

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

Produces output

```text
Filter evaluated with 0 out of 140 uniquely matched and 0 error(s) across 1 manifest(s)
┌───────────┬─────────┬─────────┬────────┐
│ ECOSYSTEM │ PACKAGE │ VERSION │ SOURCE │
├───────────┼─────────┼─────────┼────────┤
└───────────┴─────────┴─────────┴────────┘
```

Identify libraries that are potentially unpopular based on Github stars

```bash
vet query --from /tmp/dcj-dump --filter 'projects.exists(p, (p.type == "GITHUB") && (p.stars < 10))'
```

Produces output

```text
Filter evaluated with 1 out of 140 uniquely matched and 0 error(s) across 1 manifest(s)
┌───────────┬───────────────────────────────────────┬─────────┬─────────────────────────────────────────────────────┐
│ ECOSYSTEM │ PACKAGE                               │ VERSION │ SOURCE                                              │
├───────────┼───────────────────────────────────────┼─────────┼─────────────────────────────────────────────────────┤
│ Maven     │ com.sun.istack:istack-commons-runtime │ 3.0.12  │ https://github.com/eclipse-ee4j/jaxb-istack-commons │
└───────────┴───────────────────────────────────────┴─────────┴─────────────────────────────────────────────────────┘
```

Identify potentially unmaintained libraries as per [OpenSSF Scorecard](#)

```bash
vet query --from /tmp/dcj-dump --filter 'scorecard.scores.Maintained == 0'
```

Produces output

```text
Filter evaluated with 16 out of 140 uniquely matched and 0 error(s) across 1 manifest(s)
┌───────────┬─────────────────────────────────────────────┬─────────────┬────────────────────────────────────────────────────────┐
│ ECOSYSTEM │ PACKAGE                                     │ VERSION     │ SOURCE                                                 │
├───────────┼─────────────────────────────────────────────┼─────────────┼────────────────────────────────────────────────────────┤
│ Maven     │ io.github.openfeign.form:feign-form-spring  │ 3.8.0       │ https://github.com/openfeign/feign-form                │
│ Maven     │ io.github.openfeign.form:feign-form         │ 3.8.0       │ https://github.com/openfeign/feign-form                │
│ Maven     │ org.apiguardian:apiguardian-api             │ 1.1.2       │ https://github.com/apiguardian-team/apiguardian        │
│ Maven     │ org.opentest4j:opentest4j                   │ 1.2.0       │ https://github.com/ota4j-team/opentest4j               │
│ Maven     │ org.jsoup:jsoup                             │ 1.15.4      │ https://github.com/jhy/jsoup                           │
│ Maven     │ com.fasterxml:classmate                     │ 1.5.1       │ https://github.com/fasterxml/java-classmate            │
│ Maven     │ com.sun.istack:istack-commons-runtime       │ 3.0.12      │ https://github.com/eclipse-ee4j/jaxb-istack-commons    │
│ Maven     │ jakarta.annotation:jakarta.annotation-api   │ 1.3.5       │ https://github.com/eclipse-ee4j/common-annotations-api │
│ Maven     │ jakarta.validation:jakarta.validation-api   │ 2.0.2       │ https://github.com/eclipse-ee4j/beanvalidation-api     │
│ Maven     │ org.hamcrest:hamcrest                       │ 2.2         │ https://github.com/hamcrest/javahamcrest               │
│ Maven     │ com.github.stephenc.jcip:jcip-annotations   │ 1.0-1       │ https://github.com/stephenc/jcip-annotations           │
│ Maven     │ jakarta.xml.bind:jakarta.xml.bind-api       │ 2.3.3       │ https://github.com/eclipse-ee4j/jaxb-api               │
│ Maven     │ org.atteo:evo-inflector                     │ 1.3         │ https://github.com/atteo/evo-inflector                 │
│ Maven     │ jakarta.transaction:jakarta.transaction-api │ 1.3.3       │ https://github.com/eclipse-ee4j/jta-api                │
│ Maven     │ org.jboss.logging:jboss-logging             │ 3.4.3.Final │ https://github.com/jboss-logging/jboss-logging         │
│ Maven     │ org.xmlunit:xmlunit-core                    │ 2.9.0       │ https://github.com/xmlunit/xmlunit                     │
└───────────┴─────────────────────────────────────────────┴─────────────┴────────────────────────────────────────────────────────┘
```

## Whats next?

This post covered introductory scenario on getting started with `vet`
especially for a Java app. Refer to [advanced usages](https://docs.safedep.io/category/-advanced-usage) on how to use policy as code
to setup security guard rails in CI/CD with `vet`

### Need help?

* Join our [Discord](https://rebrand.ly/safedep-community)
* Start a [Github Discussion](https://github.com/safedep/vet/discussions)

