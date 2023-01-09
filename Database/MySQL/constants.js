export const SQL_CreateTable = `
    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        firstName VARCHAR(255) NOT NULL, 
        lastName VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        sex BOOL NOT NULL,
        address VARCHAR(255)
        )
    `;

export const SQL_QueryUser = `
    SELECT username from users
    `;

export const SQL_QueryUserId = `
    SELECT 
    `;