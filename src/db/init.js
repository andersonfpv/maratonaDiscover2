const Database = require('./config')

const initDb = {

    async init() {

        const db = await Database()
    
        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        )`);
        
        await db.exec(`CREATE TABLE jobs(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            ctreated_at DATETIME
        )`);
        
        await db.run(`INSERT INTO profile (
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year
        ) VALUES (
            "Anderson",
            "https://github.com/andersonfpv.png",
            9000,
            5,
            5,
            4
        );`);
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            ctreated_at
        ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            161714376018
        );`);
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            ctreated_at
        ) VALUES (
            "OneTwo Projects",
            3,
            47,
            161714376018
        );`);
        
        await db.close()
    }

}

initDb.init()