import React, { useState } from "react";
import { Flex, NumberInput, TextInput, Button } from "@mantine/core";
import StudentModel from "../scripts/types/StudentModel";
import { modals } from "@mantine/modals";

const defaultValues: StudentModel = {
    id: -1,
    name: "",
    age: 0,
    grades: {
        english: 0,
        math: 0,
        science: 0,
        mean: 0,
    },
};

const StudentModal = ({
    setter,
}: {
    setter: React.Dispatch<React.SetStateAction<StudentModel[]>>;
}) => {
    const [formData, setFormData] = useState<StudentModel>(defaultValues);
    const computeMean = (key: string, value: number) => {
        const grades = { ...formData.grades, [key]: value };
        const mean = (grades.english! + grades.math! + grades.science!) / 3;
        setFormData((old) => {
            return {
                ...old,
                grades: {
                    ...old.grades,
                    mean,
                },
            };
        });
    };

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(formData);
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
                {/* </Group> */}
                {/* <Group> */}
                <NumberInput
                    label="Anglais"
                    placeholder="10"
                    max={10}
                    min={0}
                    value={formData.grades.english}
                    onChange={(value) => {
                        setFormData((old) => {
                            return {
                                ...old,
                                grades: {
                                    ...old.grades,
                                    english: +value,
                                },
                            };
                        });
                        computeMean("english", +value);
                    }}
                />
                <NumberInput
                    label="Math"
                    placeholder="10"
                    max={10}
                    min={0}
                    value={formData.grades.math}
                    onChange={(value) => {
                        setFormData((old) => {
                            return {
                                ...old,
                                grades: {
                                    ...old.grades,
                                    math: +value,
                                },
                            };
                        });
                        computeMean("math", +value);
                    }}
                />
                <NumberInput
                    label="Science"
                    placeholder="10"
                    max={10}
                    min={0}
                    value={formData.grades.science}
                    onChange={(value) => {
                        setFormData((old) => {
                            return {
                                ...old,
                                grades: {
                                    ...old.grades,
                                    science: +value,
                                },
                            };
                        });
                        computeMean("science", +value);
                    }}
                />

                <NumberInput
                    label="Moyenne"
                    placeholder="10"
                    max={10}
                    min={0}
                    value={formData.grades.mean}
                    disabled
                />
                {/* </Group> */}
                <Button type="submit">Submit</Button>
            </Flex>
        </form>
    );
};

export default StudentModal;
