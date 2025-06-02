#!/usr/bin/env bash
set -e
export DATABASE_URL="$POSTGRES_DB_URL?sslmode=disable"
echo "≫ applying migrations..."
npx prisma migrate deploy
npx prisma generate
