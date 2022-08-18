import React, { useMemo } from "react";
import { useNavigate } from "react-router";
import Contact from "./Contact";

const Home = ({ contacts, searchContact, setContacts }) => {
  const navigate = useNavigate();

  const search = useMemo(
    () =>
      contacts.filter((item) =>
        item.name
          .toLocaleLowerCase()
          .startsWith(searchContact.toLocaleLowerCase().trim())
      ),
    [searchContact]
  );

  // if user enter a value to field then show matching variants
  // else show all contacts
  const allContacts = searchContact ? search : contacts;

  return (
    <main>
      <button className="btn-add" onClick={() => navigate("/add")}>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="plus"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="#fff"
            d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
          ></path>
        </svg>
      </button>
      <section>
        <div className="container d-flex">
          <table>
            <thead>
              <tr>
                <th>Имя</th>
                {window.matchMedia("(min-width: 1199px)").matches && (
                  <>
                    {" "}
                    <th>Эл. Почта</th>
                    <th>Номер телефона</th>
                    <th>Должность и компания</th>
                    <th></th>
                    <th></th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {contacts &&
                allContacts?.map((item) => (
                  <Contact
                    item={item}
                    key={item.name}
                    contacts={contacts}
                    setContacts={setContacts}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Home;
