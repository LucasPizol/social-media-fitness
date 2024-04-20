export interface BcryptHasher {
  hash: (value: string) => Promise<string>;
}
export interface BcryptCompare {
  compare: (value: string, hash: string) => Promise<boolean>;
}
