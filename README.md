# Full-Stack MERN Grocery-List

> As part of my Bloc certifications I made my very first MERN application.

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create your own mongoDB cluster, add a user "Read and write to any database", add Whitelist Entry "From anywhere", Connect to DevConnector - Connect String Only and copy the keys in config / default.json

```
{
  mongoURI: 'YOUR_OWN_MONGO_URI',
};
```

As part of my Bloc Certifications, I made my very first MERN App.

The purpose of this app was to let its users share a common grocery-list. Each user first need to register with an email address and a password. Then, once they have registered they can login as a user to access the list.
The list displays items previously added by other users. You can create your own items, edit them by opening a modal, destroy any item or mark it as purchased thanks to an input check box.

The Create, Read, Update and Delete actions are sent to a mongoDB database I have created for this occasion.

This was the first-time I was creating a full-stack app. All I can say is that this wass very challenging to say the least, especially in only 7 days.

I chose to use Node and Express on the back-end, React of the front-end. Regarding the database I chose to go with mongoDB through mongodb atlas and for deployement I chose Heroku. I decided to take the challenge of implementing my db with Mongo because I had never worked on it. I wanted to discover and learn its usage as noSQL db.
Regarding user authentication, I alo went on taking an extra (small) challenge by using JSON web tokens.
On the front-side, I used Reactstrap for styling. This is simply the React version of Bootstrap, on which I had been previously working. This was a great way to simplify the styling and gain time as it was limited. I have also been able to add on react-transition to add a little fading effect when deleting items.

In conclusion, I have very-mixed feelings about how I have handled this challenge. I have been probably way too ambitious at the beginning as I even tried to use Redux and waste some time trying to implement something I wasn't familiar (at all) with.
Using Mongo was also very challenging, especially for implementing a well-functioning test-suite. Until now I have been essentially working with Jasmine test-suite, but by using Mongo this wasn't working as well as when I was using postgresql. From my research, the most appropriate tool would have been to use Jest MongoDB as it provides all the required configuration to run tests.
If I had had more time, I would also have implemented socket.io to make App properly "real-time" when two users or more are connected at the same time. I also worked on implementing error/success messages, but so far the are not being displayed.
On the personal side, I have also been very mad at myself for neglecting git versioning and losing some important work at one point. I also had to dela with my perfectionism when such a challenge limits your desire for.
Finally, I would greatly implement the styling in general. All these mentioned steps will be developed in the future.

From this challenge, it led me to learning targets for the next coming weeks such as reinforce my React skills and take time to learn Redux. I will also definitely study Mongo as it was a nice discovery.
