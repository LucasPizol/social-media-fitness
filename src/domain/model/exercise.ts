export interface ExerciseModel {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AddExerciseModel {
  name: string;
  userId: string;
}
