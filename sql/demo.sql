
# sqlite3 demo.db
# .table


CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    kurs TEXT
);

INSERT INTO students (name, kurs)
VALUES ('Bob', 'Hüpfen');

INSERT INTO students (id, name, kurs)
VALUES (4, 'Stacy', 'Malen');

SELECT * FROM students;
