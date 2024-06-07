import { useState } from "react";
import {
    ActionIcon,
    Flex,
    ScrollArea,
    TextInput,
    Title,
    Tooltip,
} from "@mantine/core";
import { students } from "../scripts/data/students";
import StudentCard from "./StudentCard";
import { IconNumber123, IconPlus, IconStars } from "@tabler/icons-react";
import StudentModal from "./StudentModal";
import { modals } from "@mantine/modals";

const StudentSection = () => {
    const [studentList, setStudentList] = useState(students);
    const [sortedBy, setSortedBy] = useState<"age" | "grade" | "none">("none");
    const [filterBy, setFilterBy] = useState<string | undefined>();

    const handleSort = (by: "age" | "grade" | "none") => {
        if (sortedBy === by) setSortedBy("none");
        else setSortedBy(by);
    };

    const openModal = () =>
        modals.open({
            title: "Authentication",
            children: <StudentModal setter={setStudentList} />,
        });

    return (
        <Flex
            direction={"column"}
            bg={"grey"}
            h={"fit-content"}
            p={32}
            style={{ overflow: "hidden" }}
            gap={16}
        >
            <Flex flex={1} justify={"space-between"}>
                <Flex gap={16} align={"center"}>
                    <Title order={1}>Students</Title>
                    <Tooltip label="Add a student">
                        <ActionIcon onClick={openModal} color="grape">
                            <IconPlus />
                        </ActionIcon>
                    </Tooltip>
                </Flex>
                <Flex>
                    <Flex align={"center"} gap={16}>
                        <Tooltip label="Sort by age">
                            <ActionIcon
                                color="grape"
                                onClick={() => {
                                    handleSort("age");
                                }}
                            >
                                <IconNumber123 />
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Sort by grade">
                            <ActionIcon
                                color="grape"
                                onClick={() => {
                                    handleSort("grade");
                                }}
                            >
                                <IconStars />
                            </ActionIcon>
                        </Tooltip>
                        <TextInput
                            placeholder="Search by name"
                            onChange={(event) =>
                                setFilterBy(event.currentTarget.value)
                            }
                        />
                    </Flex>
                    {/* <Flex></Flex> */}
                </Flex>
            </Flex>
            <ScrollArea h={"fit-content"} flex={1} pb={16}>
                <Flex direction={"row"} gap={"md"}>
                    {studentList
                        ?.filter(
                            (el, id) =>
                                filterBy === undefined ||
                                el.name
                                    ?.trim()
                                    .toLowerCase()
                                    .includes(
                                        filterBy.trim().toLowerCase() as string
                                    )
                        )
                        .sort((a, b) => {
                            switch (sortedBy) {
                                case "age":
                                    if (!a.age || !b.age) return 0;
                                    return a.age! - b.age!;
                                case "grade":
                                    if (!a.grades || !b.grades) return 0;
                                default:
                                    return 0;
                            }
                        })
                        .map((student, index) => (
                            <StudentCard
                                key={index}
                                data={student}
                                setter={setStudentList}
                            />
                        ))}
                </Flex>
            </ScrollArea>
        </Flex>
    );
};

export default StudentSection;
