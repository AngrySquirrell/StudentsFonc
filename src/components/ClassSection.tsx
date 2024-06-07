import { useState } from "react";
import {
    ActionIcon,
    Flex,
    ScrollArea,
    TextInput,
    Title,
    Modal,
    Tooltip,
} from "@mantine/core";
import { IconNumber123, IconPlus } from "@tabler/icons-react";
import TeacherModel from "../scripts/types/TeacherModel";
import { modals } from "@mantine/modals";
import ClassCard from "./ClassCard";
import { classes } from "../scripts/data/classes";
import ClassModal from "./ClassModal";

const ClassSection = () => {
    const [classList, setClassList] = useState(classes);
    const [sortedBy, setSortedBy] = useState<"age" | "grade" | "none">("none");
    const [filterBy, setFilterBy] = useState<string | undefined>();

    const sortByAge = (a: TeacherModel, b: TeacherModel) => {
        if (!a.age || !b.age) return 0;
        return a.age! - b.age!;
    };
    const handleSort = (by: "age" | "grade" | "none") => {
        if (sortedBy === by) setSortedBy("none");
        else setSortedBy(by);
    };

    const openModal = () =>
        modals.open({
            title: "Authentication",
            children: <ClassModal setter={setClassList} data={classList} />,
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
                    <Title order={1}>Class</Title>
                    {/* <Tooltip label="Add a class">
                        <ActionIcon onClick={openModal} color="orange">
                            <IconPlus />
                        </ActionIcon>
                    </Tooltip> */}
                </Flex>
                <Flex>
                    <Flex align={"center"} gap={16}>
                        <Tooltip label="Trier par âge">
                            <ActionIcon
                                color="teal"
                                onClick={() => {
                                    handleSort("age");
                                }}
                            >
                                <IconNumber123 />
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
            <ScrollArea h={"fit-content"} pb={16}>
                <Flex direction={"row"} gap={"md"}>
                    {classList
                        ?.filter(
                            (el, id) =>
                                filterBy === undefined ||
                                el.students?.find((student) =>
                                    student.name
                                        ?.toLowerCase()
                                        .trim()
                                        .includes(filterBy.toLowerCase().trim())
                                )
                        )
                        // .sort((a, b) => {
                        //     if (sortedBy === "age") return sortByAge(a, b);
                        //     return 0;
                        // })
                        .map((singleClass, index) => (
                            <ClassCard
                                key={index}
                                data={singleClass}
                                setter={setClassList}
                            />
                        ))}
                </Flex>
            </ScrollArea>
        </Flex>
    );
};

export default ClassSection;
