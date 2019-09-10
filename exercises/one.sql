-- Find earliest date a user joined

SELECT DATE_FORMAT((created_at), "%M %D %Y") AS earliest_date FROM users ORDER BY created_at ASC LIMIT 1;