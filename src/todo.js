import { format } from 'date-fns';

export default class Todo {
  isCompleted = false;

  constructor(title, desc, date, isImportant = false) {
    this.title = title;
    this.desc = desc;
    this.date =
      date.length === 0 ? 'No Date' : format(new Date(date), 'MM/dd/yyyy');
    this.isImportant = isImportant;
  }
}
