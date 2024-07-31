// Define the Category interface
export interface CategoryInterface {
  name: string;
  urlHandle: string;
}

// Implement the Category interface with a class
export class Category implements CategoryInterface {
  constructor(
    public name: string = 'Wrestling',
    public urlHandle: string = 'wrestling'
  ) {}
}
