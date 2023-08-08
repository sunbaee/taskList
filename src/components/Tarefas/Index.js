import React from 'react';
import PropTypes from 'prop-types';

import './Tarefas.css';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
    return (
      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
              <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
            </span>
          </li>
        ))}
      </ul>
    );
}

Tarefas.propTypes = {
    tarefas: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
};
