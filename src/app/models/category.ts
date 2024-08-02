// Define the Category interface
export interface CategoryInterface {
  id: string;
  name: string;
  urlHandle: string;
}

// Implement the Category interface with a class
export class Category implements CategoryInterface {
  constructor(
    public id: string = '',
    public name: string = '',
    public urlHandle: string = ''
  ) {}
}
