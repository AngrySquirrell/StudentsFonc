import React, { useEffect, useState } from "react";
import { Flex, TextInput, Button, Select, MultiSelect } from "@mantine/core";
import SessionModel from "../scripts/types/SessionModel";
import { modals } from "@mantine/modals";
import TeacherModel from "../scripts/types/TeacherModel";
import { DateInput } from "@mantine/dates";

import ClassModel from "../scripts/types/ClassModel";

const defaultValues: ClassModel = {
    id: -1,
    students: [],
    level: 0,
};

const ClassModal = ({
    setter,
    data,
}: {
    setter: React.Dispatch<React.SetStateAction<SessionModel[]>>;
    data: ClassModel[];
}) => {
    const [formData, setFormData] = useState<SessionModel>(defaultValues);

    const createData = {};

    useEffect(() => {
        data;
        createData;
    }, []);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setter((old) => [...old, { ...formData, id: old.length + 1 }]);
        setFormData(defaultValues);
        modals.closeAll();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Flex
                mih={50}
                bg="rgba(0, 0, 0, .3)"
                gap="md"
                justify="center"
                align="center"
                direction="column"
                // wrap="wrap"
            >
                {/* <Group> */}
                <Flex
                    direction={"row"}
                    w={"100%"}
                    gap="xs"
                    justify="center"
                    align="center"
                    // direction="column"
                >
                    {/* <MultiSelect
                        label="Students"
                        placeholder="Pick value"
                        onChange={(value) => {
                            setFormData((old) => {
                                return {
                                    ...old,
                                    students: [...old.students, value],
                                };
                            });
                        }}
                        data={[]}
                    /> */}
                </Flex>
                <Select
                    label="Your favorite library"
                    placeholder="Pick value"
                    onChange={(value) => {
                        setFormData((old) => {
                            return {
                                ...old,
                                subject: value as "",
                            };
                        });
                    }}
                    data={[
                        { value: "1", label: "6th grade" },
                        { value: "2", label: "7th grade" },
                        { value: "3", label: "8th grade" },
                        { value: "4", label: "9th grade" },
                    ]}
                />
                {/* </Group> */}
                <Button type="submit">Submit</Button>
            </Flex>
        </form>
    );
};

export default ClassModal;
