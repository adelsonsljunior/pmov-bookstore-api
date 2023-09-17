#!/bin/bash

## Environment Variables

cp .env.example .env

## Run Database

docker compose up -d

## Installing dependencies

npm i

## Run migrations

npx prisma migrate dev

## Seeding the database

npx prisma db seed

## Run application

npm run dev