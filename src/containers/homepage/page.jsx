'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EmployeeCard from '@/containers/homepage/components/employeecard/page';
import Image from "next/image";
import { useState } from 'react';


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
                "name": "Bob Chapek",
                "title": "Chief Executive Officer",
                "profile_link": "https://theorg.com/org/disney/team/bob-chapek",
                "direct_reports_count": 13,
                "direct_reports": [
                    {
                        "name": "Christine M. McCarthy",
                        "title": "Senior Executive Vice President and Chief Financial Officer",
                        "profile_link": "https://theorg.com/org/disney/team/christine-m-mccarthy",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "name": "Alan N. Braverman",
                                "title": "Senior Executive Vice President, General Counsel and Secretary",
                                "profile_link": "https://theorg.com/org/disney/team/alan-n-braverman",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
                                "name": "Zenia Mucha",
                                "title": "Senior Executive Vice President, Chief Communications Officer",
                                "profile_link": "https://theorg.com/org/disney/team/zenia-mucha",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            }
                        ]
                    },

                    {
                        "name": "Jennifer Lee",
                        "title": "Chief Creative Officer, Walt Disney Animation Studios",
                        "profile_link": "https://theorg.com/org/disney/team/jennifer-lee",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "name": "Clark Spencer",
                                "title": "President, Walt Disney Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/clark-spencer",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
                                "name": "Andrew Millstein",
                                "title": "Co-President, Walt Disney Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/andrew-millstein",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            }
                        ]
                    },
                    {
                        "name": "Pete Docter",
                        "title": "Chief Creative Officer, Pixar Animation Studios",
                        "profile_link": "https://theorg.com/org/disney/team/pete-docter",
                        "direct_reports_count": 2,
                        "direct_reports": [
                            {
                                "name": "Jim Morris",
                                "title": "President, Pixar Animation Studios",
                                "profile_link": "https://theorg.com/org/disney/team/jim-morris",
                                "direct_reports_count": 0,
                                "direct_reports": []
                            },
                            {
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
                        "name": "Tilak Mandadi",
                        "title": "Executive Vice President and Chief Technology Officer, Disney Parks, Experiences and Products",
                        "profile_link": "https://theorg.com/org/disney/team/tilak-mandadi",
                        "direct_reports_count": 1,
                        "direct_reports": [
                            {
                                "name": "Josh D'Amaro",
                                "title": "Chairman, Disney Parks, Experiences and Products",
                                "profile_link": "https://theorg.com/org/disney/team/josh-d-amaro",
                                "direct_reports_count": 2,
                                "direct_reports": [
                                    {
                                        "name": "Ken Potrock",
                                        "title": "President, Disneyland Resort",
                                        "profile_link": "https://theorg.com/org/disney/team/ken-potrock",
                                        "direct_reports_count": 0,
                                        "direct_reports": []
                                    },
                                    {
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
    const [selectedExecutiveIndex, setSelectedExecutiveIndex] = useState(null);
    const [selectedPath, setSelectedPath] = useState([]);


    const handleExecutiveSelection = (index) => {
        setSelectedExecutiveIndex(index === selectedExecutiveIndex ? null : index);
    };


    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleSelectEmployee = (employee) => {
        setSelectedEmployee(employee); // Set the selected employee to state
    };


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
            <div className='w-full'>
                <span className='text-lg font-semibold mb-10 flex'>The Organization</span>
                <EmployeeCard
                    employee={data.executives.CEO}
                    onSelect={handleSelectEmployee}
                    selectedEmployee={selectedEmployee}
                    depth={0}
                />
            </div>
        </div>
    )
}

export default HomeContainer;