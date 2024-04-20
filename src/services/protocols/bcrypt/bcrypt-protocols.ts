export interface BcryptHasherProtocols {
  hash: (value: string) => Promise<string>;
}
export interface BcryptCompareProtocols {
  compare: (value: string, hash: string) => Promise<boolean>;
}
