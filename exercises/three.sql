-- Users according to the month they joined

 SELECT Monthname(created_at) AS month,
    Count(*)              AS count
    FROM   users
    GROUP  BY month
    ORDER  BY count DESC;