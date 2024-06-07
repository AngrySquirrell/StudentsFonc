import ClassModel from "../types/ClassModel";
import { students } from "./students";

export const classes: ClassModel[] = [
    {
        id: 1,
        students: [
            students[0],
            students[1],
            students[2],
            students[3],
            students[4],
            students[24],
        ],
        level: 1,
    },
    {
        id: 2,
        students: [
            students[5],
            students[6],
            students[7],
            students[8],
            students[9],
        ],
        level: 2,
    },
    {
        id: 3,
        students: [
            students[10],
            students[11],
            students[12],
            students[13],
            students[14],
            students[15],
            students[22],
            students[23],
        ],
        level: 3,
    },
    {
        id: 4,
        students: [
            students[16],
            students[17],
            students[18],
            students[19],
            students[20],
            students[21],
        ],
        level: 4,
    },
];
