import React, { useState } from "react";
import { Flex, NumberInput, TextInput, Button, Select } from "@mantine/core";
import TeacherModel from "../scripts/types/TeacherModel";
import { modals } from "@mantine/modals";

const defaultValues: TeacherModel = {
    id: -1,
    name: "",
    age: 0,
    subject: "",
};

const TeacherModal = ({
    setter,
}: {
    setter: React.Dispatch<React.SetStateAction<TeacherModel[]>>;
}) => {
    const [formData, setFormData] = useState<TeacherModel>(defaultValues);

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
                        value={formData.name}
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
                    <NumberInput
                        label="Votre âge"
                        placeholder="18"
                        value={formData.age}
                        onChange={(value) => {
                            setFormData((old) => {
                                return {
                                    ...old,
                                    age: +value,
                                };
                            });
                        }}
                    />
                </Flex>
                <Select
                    label="Subject"
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

export default TeacherModal;
