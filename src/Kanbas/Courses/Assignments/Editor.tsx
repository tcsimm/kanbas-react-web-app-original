import React from 'react';
import { useParams } from 'react-router-dom';

export default function AssignmentEditor() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h2>Assignment Editor - Assignment {id}</h2>
      <form>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" />
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input type="date" id="dueDate" name="dueDate" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
