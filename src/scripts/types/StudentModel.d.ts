import { RelationId } from "./RelationId";

export default interface StudentModel {
    id: RelationId;
    name?: string;
    age?: number;
    grades: {
        mean?: number;
        math?: number;
        english?: number;
        science?: number;
    };
}
