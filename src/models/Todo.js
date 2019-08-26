export default class Todo {
  constructor({ title, description, done = false }) {
    const now = Date.now();

    this.id = String(now);
    this.title = title;
    this.description = description;
    this.done = done;
    this.createdAt = now;
  }
}
