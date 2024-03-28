# Sequelize Migration Integration in Express

This guide provides step-by-step instructions for integrating Sequelize migrations into an Express.js application. Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) for PostgreSQL, MySQL, SQLite, and MSSQL databases.

## Prerequisites

- Node.js installed on your machine
- Express.js application set up
- Sequelize installed (`npm install --save sequelize`)
- Sequelize CLI installed globally (`npm install -g sequelize-cli`)
- Database configured and connected to your Express application

## Installation Process

```bash
# Install Sequelize CLI
npm install -g sequelize-cli

# Initialize Sequelize
sequelize init

# Create a Migration
sequelize migration:generate --name migration-name

# Run Migrations
sequelize db:migrate

# Rollback Migrations (Optional)
sequelize db:migrate:undo
