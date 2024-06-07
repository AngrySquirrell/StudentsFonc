import { RelationId } from "./RelationId";
import StudentModel from "./StudentModel";

export default interface ClassModel {
    id: RelationId;
    students?: StudentModel[];
    level?: number;
}
