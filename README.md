# DocMyDB

Automatically generate documentation and diagrams for your database.

DocMyDB is a tool that connects to an existing database and generates clear, structured documentation of its schema. It analyzes tables, columns, relationships and constraints to produce human-readable documentation and visual ER diagrams.

The goal is simple: **help developers understand databases faster.**

---

# Why DocMyDB?

Working with existing databases is often painful:

- undocumented schemas  
- hundreds of tables  
- unclear relationships  
- onboarding new developers takes too long  

DocMyDB solves this by **automatically generating database documentation** directly from the schema.

---

# Features

- Automatic database schema analysis  
- Table and column documentation  
- Relationship detection (foreign keys)  
- ER diagram generation  
- Human-readable explanations of the schema  
- Export documentation to Markdown / HTML  
- Easy connection to existing databases  

---

# Supported Databases (planned)

- PostgreSQL
- MySQL
- SQLite
- SQL Server

More connectors will be added later.

---

# Example

Imagine a database with the following tables:

Users  
Orders  
Products  
OrderItems  

DocMyDB will automatically detect relationships and generate something like:

### Users
- id (PK)
- name
- email

### Orders
- id (PK)
- user_id (FK → Users.id)
- created_at

### Products
- id (PK)
- name
- price

### OrderItems
- order_id (FK → Orders.id)
- product_id (FK → Products.id)
- quantity

It will also generate an **ER diagram** showing how the tables relate to each other.

---

# Use Cases

DocMyDB is useful for:

- Developers joining an existing project  
- Teams maintaining legacy databases  
- Technical documentation generation  
- Understanding third-party databases  
- Database architecture reviews  

---

# Project Vision

The long-term vision is to build a **database intelligence platform** that can:

- document schemas
- explain database structures
- detect bad design patterns
- suggest improvements
- help developers navigate large databases

---

# Status

DocMyDB is currently in **early development**.

The first version will focus on:

- connecting to databases
- extracting schema metadata
- generating documentation

---

# Contributing

Contributions are welcome.

1. Fork the repository  
2. Create a feature branch  
3. Submit a pull request  

