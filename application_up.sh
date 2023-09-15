#!/bin/bash

## Environment Variables

cp .env.example .env

## Run Database

docker compose up -d

## installing dependencies

npm i

## run migrations

npx prisma migrate dev

## Run application

npm run dev