'use client'
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import React, {useRef, useState} from 'react';
import Fullscreen from "@/assets/svg/fullscreen.svg";
import Minimize from "@/assets/svg/exit.svg";
import Screenshot from "@/assets/svg/screenshot.svg";
import html2canvas from 'html2canvas';

import OrgChart from "@/containers/homepage/components/orgchart/page";

const flattenEmployees = (employee, parentId = null) => {
    return [
        {...employee, parentId},
        ...employee.direct_reports.flatMap((report) => flattenEmployees(report, employee.id)),
    ];
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
    const [isHidden, setIsHidden] = useState(false);


    const {company} = data;

    const orgChartRef = useRef(null);

    const captureScreenshot = async (element) => {
        const canvas = await html2canvas(element);
        const imgData = canvas.toDataURL();
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = imgData;
        link.click();
    };

    const handleCaptureClick = () => {
        if (orgChartRef.current) {
            captureScreenshot(orgChartRef.current);
        }
    };


    return (
        <div className=' flex flex-col items-center'>

            <div className={`max-w-4xl ${isHidden ? 'hidden' : ''}`}>
                <div className="hidden max-w-screen-xl p-10 px-4 pb-16 mx-auto space-y-6 md:block">
                    <div className="flex flex-col space-y-8 lg:space-x-12 lg:space-y-0">
                        <Card>
                            <CardHeader className='flex flex-col gap-4'>
                                <CardTitle>
                                    <div className='flex items-center gap-2'>
                                        <Image className='rounded-lg' src='https://picsum.photos/200' width={60}
                                               height={60}
                                               alt="Company Logo"/>
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
                                        <CardDescription><a href={company.website} target="_blank"
                                                            rel="noopener noreferrer">{company.website}</a></CardDescription>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div
                className='w-full  overflow-hidden  items-center justify-center flex flex-col  relative '>
                {
                    isHidden ?
                        <Image alt={'minimize'} src={Minimize}
                               className={`absolute top-10 right-10 transform transition-transform duration-500 ${isHidden ? 'rotate-180' : ''}`}
                               onClick={() => setIsHidden(false)}>
                        </Image> : <Image alt={'maximize'} src={Fullscreen}
                                          className="absolute top-10 right-10 transform transition-transform duration-500"
                                          onClick={() => setIsHidden(true)}>
                        </Image>
                }
                {/*<Image className="absolute top-10 right-20 transform transition-transform duration-500"*/}
                {/*       src={Screenshot} alt={'screenshot'} onClick={handleCaptureClick}></Image>*/}
                <div className='w-full border border-black' ref={orgChartRef}>
                    <OrgChart/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;