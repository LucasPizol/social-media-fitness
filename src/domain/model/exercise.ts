export interface ExerciseModel {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  disabledAt: Date | null;
  isActive: boolean;
}

export interface AddExerciseModel {
  name: string;
  userId: string;
}
