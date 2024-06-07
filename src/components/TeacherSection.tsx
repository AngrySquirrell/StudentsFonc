import { useState } from "react";
import {
    ActionIcon,
    Flex,
    ScrollArea,
    TextInput,
    Title,
    Tooltip,
} from "@mantine/core";
import { teachers } from "../scripts/data/teachers";

import { IconNumber123, IconPlus } from "@tabler/icons-react";
import TeacherModel from "../scripts/types/TeacherModel";
import { modals } from "@mantine/modals";
import TeacherCard from "./TeacherCard";
import TeacherModal from "./TeacherModal";

const TeacherSection = () => {
    const [teacherList, setTeacherList] = useState(teachers);
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
            children: <TeacherModal setter={setTeacherList} />,
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
                    <Title order={1}>Teachers</Title>
                    <Tooltip label="Ajouter un professeur">
                        <ActionIcon onClick={openModal} color="teal">
                            <IconPlus />
                        </ActionIcon>
                    </Tooltip>
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
                    {teacherList
                        ?.filter(
                            (el, id) =>
                                filterBy === undefined ||
                                el.name
                                    ?.trim()
                                    .toLowerCase()
                                    .includes(
                                        filterBy.trim().toLowerCase() as string
                                    ) ||
                                el.subject
                                    ?.trim()
                                    .toLowerCase()
                                    .includes(
                                        filterBy.trim().toLowerCase() as string
                                    )
                        )
                        .sort((a, b) => {
                            if (sortedBy === "age") return sortByAge(a, b);
                            return 0;
                        })
                        .map((teacher, index) => (
                            <TeacherCard
                                key={index}
                                data={teacher}
                                setter={setTeacherList}
                            />
                        ))}
                </Flex>
            </ScrollArea>
        </Flex>
    );
};

export default TeacherSection;
