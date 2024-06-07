import { useState } from "react";
import "./App.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { sessions } from "./scripts/data/sessions";
import { Badge, Card, Divider, Flex } from "@mantine/core";
import StudentSection from "./components/StudentSection";
import TeacherSection from "./components/TeacherSection";
import SessionSection from "./components/SessionSection";
import ClassSection from "./components/ClassSection";
function App() {
    return (
        <>
            <Flex
                maw={1440}
                w={"100%"}
                mx={"auto"}
                mih={"100vh"}
                bg={"dark.4"}
                gap={32}
                // wrap={"wrap"}
                style={{ overflow: "hidden" }}
                direction={"column"}
            >
                <StudentSection />
                <Divider />
                <TeacherSection />
                <Divider />
                <ClassSection />
                <Divider />
                <SessionSection />
            </Flex>
        </>
    );
}

export default App;
