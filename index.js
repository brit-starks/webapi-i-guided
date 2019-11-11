const express = require('express');  // Our import

const server = express(); // Our Server/server object. It isn't truly a functioning server until it begins to "listen"

// Should be the last step in any server code. The server is now able to listen and receive any request
server.listen(
  4000, () => {
    console.log('=== Server is now listening on port 4000 ===')
  }); 

  // What is the purpose of a port? 
  // Different port (addresses) s provide different services
  // There are over6000 ports for different needs
  // Ports are where your servers live, and tells clients where to find it for data
  // Think of it like an apartment building and the port being the apartment number
  // The standard is to use ports 3000 and above



  /* 
  -For ever endpoint we must explicitly write a request handler to get 
  anything back.

  - The server doesn't know what to do with an endpoint, it has to be told what to do
   */

//  Request Handler

server.get();





// -------------------------------------------------------------------

// const express = require('express');
// const db = require('./data/hubs-model');

// const server = express();

// server.listen(4000, () => {
//   console.log(' === server listening on port 4000 ===');
// });

// server.use(express().json())

// server.get('/', (request, response) => {
//   console.log('you asked for it...');
//   response.send('And now you get it back..');
// });


// //  CRUD - Create, Read, Update, Delete (Destroy)
// // GET Read, POST Create, PUT Update, DELETE

// // This is the Read method for hubs
// server.get('/hubs', (req, res) => {
//   db.find()
//     .then(hubs => {
//       res.status(200).json(hubs);
//     })
//     .catch(err => {
//       res.status(500).json({
//         message: err, 
//         success: false
//       })
//     })
// })

// // creat hub
// server.post('/hubs', (req, res) => {
//   const hubInfo = req.body;

//   db.add(hubInfo)
//   .then((hub) => {
//     res.status(201).json({ success: true, hub})
//   })
//   .catch((err) => {
//     res.status(500).json({ success: false, err })
//   })
// })

// // delete a hub
// server.delete('/hubs/:id', (req, res) => {
//   const {id} = req.params;

//   db.remove(id)
//   .then((deletedHub) => {
//     if(deletedHub) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({
//         message: `could not find id=${id}`
//       })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({
//       success: false, err
//     })
//   });
// })

// server.put('/huns/:id', (req, res) => {
//   const {id} = req.params.id;
//   const hubInfo = req.body;

//   db.update(id, changes)
//   .then( hub => {
//     if (hub) {
//       res.status(200).json({ success: true, hub });
//     } else{
//       res.status(401).json({  success: false, message: `id ${id} does not exist`})
//     }
//   // })
//   // .catch(err, => {
//   //   res.status(500).json({})
//   // })
// })

// // console.log('hello');