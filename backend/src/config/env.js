import dotenv from "dotenv";

dotenv.config();

export const env = {
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET,
    databaseUrl: process.env.DATABASE_URL,
    videosPath: process.env.VIDEOS_PATH,
};
