import React, { useState } from "react";

const Form = () => {
  const [showPeople, setShowPeople] = useState(false);
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({
    id: "",
    name: "",
    surname: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (person.name && person.surname && person.email) {
      const newPerson = {
        id: new Date().getTime().toString(),
        ...person,
      };
      setPeople((people) => [...people, newPerson]);
      setPerson({ name: "", surname: "", email: "" });
    } else {
      alert("Please enter value in every field!");
    }
  };

  return (
    <>
      <div class="login-box">
        <h2>Login</h2>
        <form>
          <div class="user-box">
            <input
              type="text"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name="surname"
              value={person.surname}
              onChange={handleChange}
            />
            <label>Surname</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div class="buttons">
            <button type="submit" class="btn" onClick={submitHandler}>
              Add person
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                setShowPeople(!showPeople);
              }}
            >
              Toggle showing people
            </button>
          </div>
        </form>
        {showPeople &&
          people.map((person) => {
            const { id, name, surname, email } = person;
            return (
              <div className="item" key={id}>
                <h4>Name: {name}</h4>
                <h4>Surname: {surname}</h4>
                <h4>Email: {email}</h4>
                <button onClick={() => removePerson(id)}>Remove</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Form;
