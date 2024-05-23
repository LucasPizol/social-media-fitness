export interface ExerciseModel {
  id: number;
  name: string;
  rest_type: string;
  weight: number;
  series: number;
  rest_time: number;
  repeats: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date | null;
  isDisabled: boolean;
}

export type AddExerciseModel = Omit<
  ExerciseModel,
  "id" | "createdAt" | "updatedAt" | "isDisabled" | "disabledAt"
>;
