import SessionModel from "../types/SessionModel";
import { classes } from "./classes";
import { teachers } from "./teachers";

export const sessions: SessionModel[] = [
    {
        id: 1,
        city: "Paris",
        date: new Date(2024, 7, 1, 10, 30), // année, mois, jour, heure, minute
        class: classes[0],
        teacher: teachers[0],
    },
    {
        id: 2,
        city: "Nice",
        date: new Date(2024, 7, 1, 14, 30),
        class: classes[1],
        teacher: teachers[2],
    },
    {
        id: 3,
        city: "Nantes",
        date: new Date(2024, 7, 1, 11, 30),
        class: classes[2],
        teacher: teachers[7],
    },
    {
        id: 4,
        city: "Angers",
        date: new Date(2024, 7, 1, 9, 0),
        class: classes[3],
        teacher: teachers[4],
    },
    {
        id: 5,
        city: "Dijon",
        date: new Date(2024, 7, 1, 10, 0),
        class: classes[3],
        teacher: teachers[5],
    },
    {
        id: 6,
        city: "Tours",
        date: new Date(2024, 7, 1, 12, 30),
        class: classes[3],
        teacher: teachers[9],
    },
];
