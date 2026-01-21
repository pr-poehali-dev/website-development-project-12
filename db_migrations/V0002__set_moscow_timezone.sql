-- Alter created_at column to use timestamptz with Moscow timezone as default
ALTER TABLE t_p26605679_website_development_.requests 
  ALTER COLUMN created_at SET DEFAULT (NOW() AT TIME ZONE 'Europe/Moscow');