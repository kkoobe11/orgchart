'use client'
import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const flattenEmployees = (employee, parentId = null) => {
    return [
        { ...employee, parentId },
        ...employee.direct_reports.flatMap((report) => flattenEmployees(report, employee.id)),
    ];
};

const EmployeeCard = ({ employee, onSelect, selectedId, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className={`flex flex-col items-center ${employee.node_level > 1 ? 'mt-4' : ''}`}>
            <Card className="bg-white shadow-lg rounded-xl my-4 w-[300px] h-[150px]">
                <CardHeader className="p-4 flex rounded-xl justify-between items-center bg-gray-100 h-full relative">
                    <Image className='rounded-full absolute top-[-40px]' src='https://picsum.photos/200' width={75} height={75} alt="Employee Image" />
                    <div className='pt-10 flex flex-col'>
                        <CardTitle className="text-xl font-bold">{employee.name}</CardTitle>
                        <CardDescription className="text-gray-600 text-xs">{employee.title}</CardDescription>
                    </div>
                    {employee.direct_reports_count > 0 && (
                        <Badge className="cursor-pointer absolute bottom-[-10px]" onClick={() => onSelect(employee.id)}>
                            {employee.direct_reports_count} Reports
                        </Badge>
                    )}
                </CardHeader>
            </Card>
        </div>
    );
};

const ParentCard = ({ employee, onSelect, selectedId, isVisible }) => {
    if (!isVisible) return null;

    return (
        <div className={`flex items-center gap-4 ${employee.node_level > 1 ? 'mt-4' : ''}`}>
            <Image className='rounded-full' src='https://picsum.photos/200' width={25} height={25} alt="Employee Image" />
            <span>{employee.name}</span>
        </div>
    );
};

const EmployeeRow = ({ employees, onSelect, selectedId, isVisible, parentEmployee }) => {
    return (
        <div className={'flex items-center gap-4 justify-center'}>
            <div className='flex w-full flex-col items-center justify-center'>
                <div className='flex gap-8'>
                    {employees.map((employee) => (
                        <EmployeeCard
                            key={employee.id}
                            employee={employee}
                            onSelect={onSelect}
                            selectedId={selectedId}
                            isVisible={selectedId === null ? employee.node_level <= 2 : selectedId === employee.id || selectedId === employee.parentId}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const HomeContainer = () => {
    const data = {
        "company": {
            "name": "The Walt Disney Company",
            "industry": "Entertainment",
            "headquarters": "Burbank, California, USA",
            "founded": 1923,
            "description": 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
            "website": "https://www.thewaltdisneycompany.com/",
            "employee_count": 203000
        },
        "executives": {
            "CEO": {
                "id": 1,
                "node_level": 1,
                "name": "Bob Chapek",
                "title": "Chief Executive Officer",
                "profile_link": "https://theorg.com/org/disney/team/bob-chapek",
                "direct_reports_count": 13,
                "direct_reports": [
                    {
                        "id": 2,
                        "node_level": 2,
                        "name": "Christine M. McCarthy",
                        "title": "Senior Executive Vice President and Chief Financial Officer",
                        "profile_link": "https://theorg.com/org/disney/team/christine-m-mccarthy",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "id": 3,
                                "node_level": 3,
                                "name": "Alan N. Braverman",
                                "title": "Senior Executive Vice President, General Counsel and Secretary",
                                "profile_link": "https://theorg.com/org/disney/team/alan-n-braverman",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
                                "id": 4,
                                "node_level": 3,
                                "name": "Zenia Mucha",
                                "title": "Senior Executive Vice President, Chief Communications Officer",
                                "profile_link": "https://theorg.com/org/disney/team/zenia-mucha",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            }
                        ]
                    },

                    {
                        "id": 5,
                        "node_level": 2,
                        "name": "Jennifer Lee",
                        "title": "Chief Creative Officer, Walt Disney Animation Studios",
                        "profile_link": "https://theorg.com/org/disney/team/jennifer-lee",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "id": 6,
                                "node_level": 3,
                                "name": "Clark Spencer",
                                "title": "President, Walt Disney Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/clark-spencer",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
                                "id": 7,
                                "node_level": 3,
                                "name": "Andrew Millstein",
                                "title": "Co-President, Walt Disney Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/andrew-millstein",
                                "direct_reports_count": 2,
                                "direct_reports": [
                                    {
                                        "id": 15,
                                        "node_level": 4,
                                        "name": "Jessica Virtue",
                                        "title": "Co-President, Walt Disney Animation Studios",
                                        "profile_link": "https://theorg.com/org/disney/team/jessica-virtue",
                                        "direct_reports_count": 0,
                                        "direct_reports": []
                                    },
                                    {
                                        "id": 16,
                                        "node_level": 4,
                                        "name": "Aimee Scribner",
                                        "title": "Co-President, Walt Disney Animation Studios",
                                        "profile_link": "https://theorg.com/org/disney/team/aimee-scribner",
                                        "direct_reports_count": 1,
                                        "direct_reports": [
                                            {
                                                "id": 17,
                                                "node_level": 5,
                                                "name": "Paul Briggs",
                                                "title": "Co-President, Walt Disney Animation Studios",
                                                "profile_link": "https://theorg.com/org/disney/team/paul-briggs",
                                                "direct_reports_count": 0,
                                                "direct_reports": [],
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "node_level": 2,
                        "name": "Pete Docter",
                        "title": "Chief Creative Officer, Pixar Animation Studios",
                        "profile_link": "https://theorg.com/org/disney/team/pete-docter",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "id": 9,
                                "node_level": 3,
                                "name": "Jim Morris",
                                "title": "President, Pixar Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/jim-morris",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
                                "id": 10,
                                "node_level": 3,
                                "name": "Edwin Catmull",
                                "title": "Co-founder, Pixar Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/edwin-catmull",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            }
                        ]
                    }
                    ,
                    {
                        "id": 11,
                        "node_level": 2,
                        "name": "Tilak Mandadi",
                        "title": "Executive Vice President and Chief Technology Officer, Disney Parks, Experiences and Products",
                        "profile_link": "https://theorg.com/org/disney/team/tilak-mandadi",
                        "direct_reports_count": 1,
                        "direct_reports": [
                            {
                                "id": 12,
                                "node_level": 3,
                                "name": "Josh D'Amaro",
                                "title": "Chairman, Disney Parks, Experiences and Products",
                                "profile_link": "https://theorg.com/org/disney/team/josh-d-amaro",
                                "direct_reports_count": 2,
                                "direct_reports": [
                                    {
                                        "id": 13,
                                        "node_level": 4,
                                        "name": "Ken Potrock",
                                        "title": "President, Disneyland Resort",
                                        "profile_link": "https://theorg.com/org/disney/team/ken-potrock",
                                        "direct_reports_count": 0,
                                        "direct_reports": []
                                    },
                                    {
                                        "id": 14,
                                        "node_level": 4,
                                        "name": "Jeff Vahle",
                                        "title": "President, Walt Disney World Resort",
                                        "profile_link": "https://theorg.com/org/disney/team/jeff-vahle",
                                        "direct_reports_count": 0,
                                        "direct_reports": []
                                    }
                                ]
                            }
                        ]
                    },


                ]
            }
        }
    }


    const { company } = data;

    const [selectedId, setSelectedId] = useState(null);
    const [selectedPath, setSelectedPath] = useState([data.executives.CEO.id]);

    const allEmployees = useMemo(() => flattenEmployees(data.executives.CEO), [data]);



    const handleSelect = (id) => {
        // Instead of setting a new path, we just set the selectedId which is used to filter the visible employees
        setSelectedId(id);
        // When a new employee is selected, append their ID to the selectedPath
        setSelectedPath((prevPath) => [...prevPath, id]);
    };

    const getVisibleEmployees = (parentId) => {
        // Filter employees that have the given parentId
        return allEmployees.filter((employee) => employee.parentId === parentId);
    };

    const getEmployeesAtLevel = (levelId) => {
        return allEmployees.filter(employee => employee.parentId === levelId);
    };

    const renderPath = () => {
        let pathComponents = [];
        let currentLevelId = data.executives.CEO.id;
        let parentEmployee = null;

        pathComponents.push(
            <EmployeeRow
                key={currentLevelId}
                employees={getEmployeesAtLevel(null)}
                onSelect={handleSelect}
                selectedId={currentLevelId}
                isVisible={true}
                parentEmployee={parentEmployee}
            />
        );

        selectedPath.forEach((id, index) => {
            if (index === 0) return;

            const employees = getEmployeesAtLevel(id);
            parentEmployee = allEmployees.find(employee => employee.id === id);

            const employeeCount = employees.length;
            const widthClass = employeeCount > 3 ? 'w-3/4' : employeeCount < 3 ? 'w-1/2' : 'w-1/4';

            pathComponents.push(
                <>
                        <>
                            <Separator className='bg-black h-[5px]' orientation='vertical'></Separator>
                            <Separator className={`bg-black ${widthClass}`}></Separator>
                            <div className={`flex justify-between ${widthClass} mb-14`}>
                                <Separator className='bg-black h-[10px]' orientation='vertical'></Separator>
                                <Separator className='bg-black h-[10px]' orientation='vertical'></Separator>
                            </div>
                        </>
                    <EmployeeRow
                        key={id}
                        employees={employees}
                        onSelect={handleSelect}
                        selectedId={id}
                        isVisible={selectedPath.includes(id)}
                        parentEmployee={parentEmployee}
                    />
                </>
            );
        });

        return pathComponents;
    };
    const levels = useMemo(() => {
        const levels = {};
        allEmployees.forEach((employee) => {
            const level = employee.node_level;
            if (!levels[level]) levels[level] = [];
            levels[level].push(employee);
        });
        return levels;
    }, [allEmployees]);

    return (
        <div className='gap-10 flex flex-col min-h-screen'>
            <div>
                <Card>
                    <CardHeader className='flex flex-col gap-4'>
                        <CardTitle>
                            <div className='flex items-center gap-2'>
                                <Image className='rounded-lg' src='https://picsum.photos/200' width={60} height={60} alt="Company Logo" />
                                {company.name}
                            </div>
                        </CardTitle>
                        <CardDescription>{company.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-6 gap-4'>
                            <div className=' flex flex-col gap-2 '>
                                <span>Industry: </span>
                                <CardDescription>{company.industry}</CardDescription>
                            </div>
                            <div className=' flex flex-col gap-2 '>
                                <span>Headquarters: </span>
                                <CardDescription>{company.headquarters}</CardDescription>
                            </div>
                            <div className='col-span-1'>
                                <span>Founded: </span>
                                <CardDescription>{company.founded}</CardDescription>
                            </div>
                            <div className='col-span-1'>
                                <span>Employees: </span>
                                <CardDescription>{company.employee_count}</CardDescription>
                            </div>
                            <div className='col-span-1'>
                                <span>Website: </span>
                                <CardDescription><a href={company.website} target="_blank" rel="noopener noreferrer">{company.website}</a></CardDescription>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='w-full items-center justify-center flex flex-col'>
                <span className='text-lg font-semibold mb-10 flex'>The Organization</span>
                {renderPath()}
            </div>
        </div>
    );
};

export default HomeContainer;