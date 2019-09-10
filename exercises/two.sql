-- Find the email of the earliest user

SELECT email, DATE_FORMAT((created_at), "%M %D %Y") AS earliest_date FROM users ORDER BY created_at ASC LIMIT 1;