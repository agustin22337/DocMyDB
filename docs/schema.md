# Database Schema

## Cost

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| title | text | NO |
| description | text | NO |
| date | timestamp without time zone | NO |
| amount | double precision | NO |
| season_Id | integer | NO |

### Foreign Keys

- season_Id → Season.id

## Crop

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| name | text | NO |
| description | text | YES |

## Company

| Column | Type | Nullable |
|--------|------|----------|
| cuit | character | NO |
| name | text | NO |
| mail | text | NO |
| description | text | YES |

## Field

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| description | text | YES |
| size | double precision | NO |
| active | boolean | NO |
| name | text | YES |

## Backup

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| filename | text | NO |
| path | text | YES |
| size | integer | NO |
| createdAt | timestamp without time zone | NO |
| type | USER-DEFINED | NO |
| status | USER-DEFINED | NO |
| checksum | text | YES |
| durationMs | integer | YES |
| errorMessage | text | YES |
| triggeredByUserId | integer | YES |

### Foreign Keys

- triggeredByUserId → Usuario.id

## Log

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| date | timestamp without time zone | NO |
| description | text | NO |
| username | text | NO |
| action | text | YES |
| device | text | YES |
| ip | text | YES |
| resource | text | YES |
| status | integer | YES |
| userId | integer | YES |

## Stage

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| name | text | NO |
| benchmark | text | YES |
| inspection_interval | text | YES |
| critical_level | integer | NO |
| crop_Id | integer | NO |

### Foreign Keys

- crop_Id → Crop.id

## Rain

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| date | timestamp without time zone | NO |
| amount | double precision | NO |
| description | text | YES |

## Task

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| title | text | NO |
| createdAt | timestamp without time zone | NO |
| dueDate | timestamp without time zone | NO |
| isCompleted | boolean | NO |
| completedAt | timestamp without time zone | YES |
| completionDescription | text | YES |
| season_Id | integer | NO |

### Foreign Keys

- season_Id → Season.id

## Season

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| startDate | timestamp without time zone | NO |
| endDate | timestamp without time zone | YES |
| size | double precision | NO |
| yield | double precision | YES |
| crop_Id | integer | NO |
| field_Id | integer | NO |
| isActive | boolean | NO |

### Foreign Keys

- crop_Id → Crop.id
- field_Id → Field.id

## _prisma_migrations

| Column | Type | Nullable |
|--------|------|----------|
| id | character varying | NO |
| checksum | character varying | NO |
| finished_at | timestamp with time zone | YES |
| migration_name | character varying | NO |
| logs | text | YES |
| rolled_back_at | timestamp with time zone | YES |
| started_at | timestamp with time zone | NO |
| applied_steps_count | integer | NO |

## Observations

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| title | text | NO |
| description | text | YES |
| date | timestamp without time zone | NO |
| season_Id | integer | NO |

### Foreign Keys

- season_Id → Season.id

## Phone

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| number | text | NO |
| description | text | YES |
| company_Id | text | NO |

### Foreign Keys

- company_Id → Company.cuit

## Usuario

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| username | text | NO |
| password | text | NO |
| role | USER-DEFINED | NO |

## Forward

| Column | Type | Nullable |
|--------|------|----------|
| id | integer | NO |
| title | text | NO |
| total | double precision | NO |
| tonnage | double precision | NO |
| date | timestamp without time zone | NO |
| company_Id | text | NO |
| currency | text | NO |
| description | text | YES |

### Foreign Keys

- company_Id → Company.cuit

