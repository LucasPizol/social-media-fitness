import {
  BcryptCompare,
  BcryptHasher,
} from "@/services/protocols/bcrypt/bcrypt-protocols";
import bcrypt from "bcrypt";
export class BcryptHelper implements BcryptHasher, BcryptCompare {
  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }

  async hash(value: string): Promise<string> {
    return bcrypt.hash(value, 8);
  }
}
