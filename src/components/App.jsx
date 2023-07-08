import css from './App.module.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import { selectContacts, selectIsLoading } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';

const App = () => {
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (!loading && contacts.length === 0) {
      const timer = setTimeout(() => {
        setShowEmptyMessage(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [loading, contacts.length]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 className={css.phonebook__app}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.contacts__app}>Contacts</h2>
      {loading && <Loader />}
      {contacts.length > 0 && <Filter />}
      {contacts.length === 0 && showEmptyMessage && (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
//
