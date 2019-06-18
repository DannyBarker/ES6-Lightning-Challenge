// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

function contactFactory(contactData) {
    let contact = {
      name: null,
      title: null,
      email: null
    }
        contact.name = contactData[0]
        contact.title = contactData[1]
        contact.email = contactData[2]
       
       return contact

  }

//   2. Complete the second function called `createContact`:
//   * createContact takes three arguments: name, title, email.
//   * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.


  function createContact(name, title, email) {
    let newContact = [name, title, email]
    let makeContact = contactFactory(newContact)
    let createString = `You can reach ${makeContact.title} ${makeContact.name} at ${makeContact.email}.`
   console.log(createString);

  }

  createContact('Jon Doe', 'Mr.', 'doejon@email.com')
  createContact('Jane Doe', 'Mrs.', 'doejane@email.com')