# DevTown - Social Media for Developers

DevTown is a social media platform designed specifically for developers. It allows developers to connect, share ideas, collaborate on projects, and stay updated on the latest trends in the tech industry. The platform is built using React.js for the front-end, Express.js for the back-end, and MongoDB Atlas for the database.
Check out the live demo of DevTown: https://devtown.onrender.com/

!MAINPG(./M.png)
!MAINPG(./LOGIN.png)


## Technologies Used

- Front-end: React.js, Tailwind CSS
- Back-end: Express.js
- Database: MongoDB Atlas

## Key Features

- User authentication and authorization system.
- User profiles with customizable avatars and bios.
- Ability to create, edit, and delete posts.
- Like and comment on posts.
- Follow and unfollow other developers.
- Real-time notifications for new followers and post interactions.

## Installation

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/devtown.git`
2. Navigate to the project folder: `cd devtown`
3. Install dependencies for both the front-end and back-end:
   - Front-end: `cd client && npm install`
   - Back-end: `cd server && npm install`
4. Set up environment variables:
   - Create a `.env` file in the `server` folder
   - Add your MongoDB Atlas connection string and any other required variables:

     ```
     MONGODB_URI=your_mongodb_atlas_connection_string
     SECRET_KEY=your_secret_key_for_jwt
     ```

5. Start the development server for both the front-end and back-end:
   - Front-end: `cd client && npm start`
   - Back-end: `cd server && npm start`
6. The front-end will run on `http://localhost:3000`, and the back-end will run on `http://localhost:5000`.

## Folder Structure


