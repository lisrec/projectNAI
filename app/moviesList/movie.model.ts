export interface Movie {
    id: number,
    name: string,
    categoryIds: string[],
    isAvailable: boolean,
    copiesLeft: number
  }