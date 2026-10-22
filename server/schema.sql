CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role VARCHAR(20) DEFAULT 'student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS assignments (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    milestone_tag VARCHAR(50),
    deadline TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS submissions (
    id SERIAL PRIMARY KEY,
    assignment_id INT REFERENCES assignments(id) ON DELETE CASCADE,
    student_name VARCHAR(100) NOT NULL,
    github_link TEXT NOT NULL,
    code_submission TEXT,
    feedback TEXT DEFAULT 'Pending review',
    status VARCHAR(50) DEFAULT 'Submitted',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);