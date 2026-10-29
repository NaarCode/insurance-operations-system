# Engineering overview

## Components

- **Administration interface:** Next.js and React for customers, policies, requests, renewals, and administrative operations.
- **Application API:** Express and TypeScript for request lifecycle rules, access checks, validation, audit events, and document handling.
- **Data layer:** PostgreSQL and Prisma for users, permissions, customers, vehicles, policies, service requests, and status history.
- **Messaging:** Bale bot handlers, conversation state, identity linkage, and customer-facing messages.

## Request lifecycle

A customer creates a request through the bot. The API validates and stores it. An authorized operator reviews and updates its status using the administration interface. Status history is retained and messages can be coordinated through the messaging integration.

## Trust boundaries

Authentication, authorization, upload checks, and audit handling belong on the server. Private endpoints, full schemas, infrastructure configuration, credentials, and sensitive business implementation are omitted.

This document summarizes the supplied source structure; it is not a penetration-test report or confirmation of production uptime.
