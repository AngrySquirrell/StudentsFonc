import ClassModel from "./ClassModel";
import { RelationId } from "./RelationId";
import TeacherModel from "./TeacherModel";

export default interface SessionModel {
    id: RelationId;
    date?: Date;
    city?: string;
    teacher?: TeacherModel;
    class?: ClassModel;
}
