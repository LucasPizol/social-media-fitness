import {
  BcryptCompareProtocols,
  BcryptHasherProtocols,
} from "@/services/protocols/bcrypt/bcrypt-protocols";
import bcrypt from "bcrypt";
export class BcryptHelper
  implements BcryptHasherProtocols, BcryptCompareProtocols
{
  async compare(value: string, hash: string): Promise<boolean> {
    return bcrypt.compare(value, hash);
  }

  async hash(value: string): Promise<string> {
    return bcrypt.hash(value, 8);
  }
}
