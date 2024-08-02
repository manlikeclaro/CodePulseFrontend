// Define the Category interface
export interface CategoryUpdateInterface {
  name: string;
  urlHandle: string;
}

// Implement the Category interface with a class
export class CategoryUpdate implements CategoryUpdateInterface {
  constructor(
    public name: string = '',
    public urlHandle: string = ''
  ) {
  }
}
