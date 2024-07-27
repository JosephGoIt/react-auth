import { useDispatch } from 'react-redux';
import { addTask } from 'redux/tasks/operations';
import css from './TaskEditor.module.css';

export const TaskEditor = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { text } = e.currentTarget.elements;
    if (text.value.trim()) {
      dispatch(addTask(text.value));
      e.currentTarget.reset();
    } else {
      alert('Task cannot be empty. Enter some text!');
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};
