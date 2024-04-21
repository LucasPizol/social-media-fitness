interface BodyFields<T> {
  key: keyof T;
  required: boolean;
  type: string;
}

export const validateBodyFields = <T>(fields: BodyFields<T>[], data: T) => {
  const missingParams = [];
  const invalidParams = [];

  for (const field of fields) {
    if (!field.required) continue;

    if (data[field.key] === undefined) {
      missingParams.push(field.key);
      continue;
    }

    if (typeof data[field.key] !== field.type) {
      invalidParams.push(field.key);
      continue;
    }
  }

  if (missingParams.length > 0 || invalidParams.length > 0) {
    throw new Error(
      `[Invalid Params: ${invalidParams.join(
        ", "
      )}], [Missing Params: ${missingParams.join(", ")}]`
    );
  }

  return data;
};
