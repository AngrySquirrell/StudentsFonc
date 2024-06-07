import { createContext } from "react";
import SessionModel from "./types/SessionModel";
import { sessions } from "./data/sessions";

export const GlobalContext = createContext<SessionModel[]>(sessions);
