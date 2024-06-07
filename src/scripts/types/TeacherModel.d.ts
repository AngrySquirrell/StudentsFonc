import { RelationId } from "./RelationId";

export default interface TeacherModel {
    id: RelationId;
    name?: string;
    age?: number;
    subject?: "math" | "english" | "science" | "";
}
