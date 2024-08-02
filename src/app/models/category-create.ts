// Define the Category interface
export interface CategoryCreateInterface {
  name: string;
  urlHandle: string;
}

// Implement the Category interface with a class
export class CategoryCreate implements CategoryCreateInterface {
  constructor(
    public name: string = '',
    public urlHandle: string = ''
  ) {
  }
}
