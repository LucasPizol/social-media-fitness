import { BadRequestError } from "@/protocols/errors/bad-request";

interface BodyFields<T> {
  key: keyof T;
  required: boolean;
  type: string;
}

export class ValidateBodyFields {
  validateBodyFields<T>(fields: BodyFields<T>[], data: T) {
    const missingParams: string[] = [];
    const invalidParams: string[] = [];
    const exceededParams: string[] = [];

    for (const field of fields) {
      if (!field.required) {
        if (
          typeof data[field.key] !== field.type &&
          data[field.key] !== undefined
        )
          invalidParams.push(field.key as string);

        continue;
      }

      if (data[field.key] === undefined) {
        missingParams.push(field.key as string);
        continue;
      }

      if (typeof data[field.key] !== field.type) {
        invalidParams.push(field.key as string);
        continue;
      }
    }

    for (const key in data) {
      if (!fields.find((field) => field.key === key)) exceededParams.push(key);
    }

    this.checkMissingParams(missingParams, invalidParams, exceededParams);

    return data;
  }

  private checkMissingParams(
    missingParams: string[],
    invalidParams: string[],
    exceededParams: string[]
  ) {
    let string = "";

    if (missingParams.length > 0)
      string += `[Missing Params: ${missingParams.join(", ")}]`;

    if (invalidParams.length > 0)
      string += `[Invalid Params: ${invalidParams.join(", ")}]`;

    if (exceededParams.length > 0)
      string += `[Exceeded Params: ${exceededParams.join(", ")}]`;

    if (string) throw new BadRequestError(string);
  }
}

export const validateBodyFields = new ValidateBodyFields().validateBodyFields;
