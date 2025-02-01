CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO "Lists" ("id", "name", "createdAt", "updatedAt")
VALUES
    (uuid_generate_v4(), 'Quantfox', NOW(), NOW()),
    (uuid_generate_v4(), 'Epitech', NOW(), NOW()),
    (uuid_generate_v4(), 'Perso', NOW(), NOW());

INSERT INTO "Tasks" ("id", "title", "description", "dueDate", "status", "listId", "createdAt", "updatedAt")
VALUES
    (uuid_generate_v4(), 'Finish the technical test', 'Complete the technical evaluation.', '2025-02-28', 'COMPLETED', (SELECT id FROM "Lists" WHERE name = 'Quantfox' LIMIT 1), NOW(), NOW()),
    (uuid_generate_v4(), 'Get an internship', 'Obtain an internship at Quantfox.', '2025-02-28', 'COMPLETED', (SELECT id FROM "Lists" WHERE name = 'Quantfox' LIMIT 1), NOW(), NOW());

INSERT INTO "Tasks" ("id", "title", "description", "dueDate", "status", "listId", "createdAt", "updatedAt")
VALUES
    (uuid_generate_v4(), 'Achieve a 3.95 GPA this year', 'Reach a 3.95 GPA average.', '2025-02-28', 'IN_PROGRESS', (SELECT id FROM "Lists" WHERE name = 'Epitech' LIMIT 1), NOW(), NOW()),
    (uuid_generate_v4(), 'Prepare for my 4th year in the USA', 'Organize my student exchange program.', '2025-02-28', 'IN_PROGRESS', (SELECT id FROM "Lists" WHERE name = 'Epitech' LIMIT 1), NOW(), NOW());

INSERT INTO "Tasks" ("id", "title", "description", "dueDate", "status", "listId", "createdAt", "updatedAt")
VALUES
    (uuid_generate_v4(), 'Run a marathon', 'Complete a full marathon.', '2025-02-28', 'COMPLETED', (SELECT id FROM "Lists" WHERE name = 'Perso' LIMIT 1), NOW(), NOW()),
    (uuid_generate_v4(), 'Bench 140 kg at the gym', 'Reach 140 kg on the bench press.', '2025-02-28', 'COMPLETED', (SELECT id FROM "Lists" WHERE name = 'Perso' LIMIT 1), NOW(), NOW());
