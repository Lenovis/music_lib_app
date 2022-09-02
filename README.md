# music_lib_app

Couple comments:

To start fake data server, start [json-server](https://www.npmjs.com/package/json-server) and run `json-server --watch db.json` 

### Things I want to improve:

- Add infinite scroll (pagination) to storage screens;
- Add song details screen where you can separately save the song to memory or file system;

### Things what I did:

- Used RTK Query for data handling from api;
- Used RTK slices for data managing;
- Used Redux persist for filesystem data storage;
- Tried and failed to do infinite scroll with RTK Query (need to take a deep dive on that);
- Implemented component structure (atoms, molecules, organisms)
