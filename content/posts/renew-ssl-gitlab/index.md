---
title: "Renewing Self-hosted Gitlab Instance SSL Keys"
date: 2024-01-18T22:54:00+03:00
draft: false
---

## What is the setup?

The instance is configured behind a private network using Gitlab Omnibus configuration, and the sub-domain is provisioned by an Apache configuration on another server. So the SSL certificates are tied to the Apache server's IP address. The certificates are provided by **letsencrypt**.

## What is the Problem?

On running the `certbot` renew command, the SSL certificates for the subdomain usually work in a seamless manner. However, all CI/CD jobs using the container registry start failing. On further inspection it shows that they fail because 

{{ $image := .Resources.Get "docker-login-error.png" }}
{{ with $image }}
  <img src="{{ .RelPermalink }}" width="{{ .Width }}" height="{{ .Height }}">
{{ end }}