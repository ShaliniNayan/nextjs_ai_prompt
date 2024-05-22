// Next.js supports the following HTTP methods:

//1. **GET** : Retrieves data or resources from the server.
//2. **POST** : Submits data to the server to Creates new resources.
//3. **PUT** : Updates or replaces an existing resource on the server.
//4. **PATCH** : Partially updates an existing resource on the server.
//5. **DELETE** : Removes a specific resource from the server.
//6. **HEAD** : Retrieves the headers that would be returned if the HEAD request's URL was instead requested with the GET method.
//6. **OPTIONS** : Retrieves the communication options for the specified resource.

export async function GET(request) {
  // Handle GET request for /api/users
  //Retrive users from the database or any data source

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Joe' },
  ];

  // send the users as a response
  return new Response(JSON.stringify(users));
}
