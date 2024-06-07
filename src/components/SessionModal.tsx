import React, { useState } from "react";
import { Flex, TextInput, Button, Select } from "@mantine/core";
import SessionModel from "../scripts/types/SessionModel";
import { modals } from "@mantine/modals";
import TeacherModel from "../scripts/types/TeacherModel";
import { DateInput } from "@mantine/dates";

import ClassModel from "../scripts/types/ClassModel";

const defaultValues: SessionModel = {
    id: -1,
    date: new Date(),
    city: "",
    teacher: {} as TeacherModel,
    class: {} as ClassModel,
};

const SessionModal = ({
    setter,
}: {
    setter: React.Dispatch<React.SetStateAction<SessionModel[]>>;
}) => {
    const [formData, setFormData] = useState<SessionModel>(defaultValues);

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
                    <TextInput
                        label="Votre nom & prénom"
                        placeholder="John Doe"
                        value={formData.city}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setFormData((old) => {
                                return {
                                    ...old,
                                    name: e.target.value,
                                };
                            });
                        }}
                    />
                    <DateInput
                        value={formData.date}
                        // onClick={(e) => {}}
                        onChange={(value) => {
                            console.log(value);
                            setFormData((old) => {
                                return {
                                    ...old,
                                    date: value as Date,
                                };
                            });
                        }}
                        label="Date input"
                        placeholder="Date input"
                    />
                    {/* <NumberInput
                        label="Votre âge"
                        placeholder="18"
                        value={formData.}
                        onChange={(value) => {
                            setFormData((old) => {
                                return {
                                    ...old,
                                    age: +value,
                                };
                            });
                        }}
                    /> */}
                </Flex>
                <Select
                    label="Your favorite library"
                    placeholder="Pick value"
                    onChange={(value) => {
                        // console.log(e.target.value);
                        setFormData((old) => {
                            return {
                                ...old,
                                subject: value as "",
                            };
                        });
                    }}
                    data={["English", "Math", "Science"]}
                />
                {/* </Group> */}
                <Button type="submit">Submit</Button>
            </Flex>
        </form>
    );
};

export default SessionModal;
