import React from 'react';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContacts } from 'Redux/operations';
import { selectVisibleContacts } from 'Redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <ul className={css.contact__ul}>
        {contacts.map(contact => (
          <li key={shortid.generate()} className={css.contact__list}>
            <RiContactsFill className={css.icon__contact} />
            {contact.name} : {contact.number}{' '}
            <button
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
              className={css.delete__contact}
            >
              <span className={css.icon__close}>
                <AiFillCloseCircle />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
