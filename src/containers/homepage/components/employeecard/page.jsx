'use client'
import { useState, useCallback } from 'react';
import { Badge } from "@/components/ui/badge";
import Up from '@/assets/svg/up.svg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

const EmployeeCard = ({ employee, onBadgeClick, currentLevel, selectedId, nodeLevel }) => {
    const isVisible = nodeLevel <= currentLevel;
    const handleBadgeClick = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the card
        const nextLevel = nodeLevel + 1;
        onBadgeClick(employee.id, nextLevel);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className={`flex flex-col items-center ${nodeLevel > 1 ? 'mt-4' : ''}`}>
            <Card className="bg-white shadow-lg rounded-xl my-4 w-[300px] h-[150px]">
                <CardHeader className="p-4 flex rounded-xl justify-between items-center bg-gray-100 h-full relative">
                    <Image className='rounded-full absolute top-[-40px]' src='https://picsum.photos/200' width={75} height={75} alt="Employee Image" />
                    <div className='pt-10 flex flex-col'>
                        <CardTitle className="text-xl font-bold">{employee.name}</CardTitle>
                        <CardDescription className="text-gray-600 text-xs">{employee.title}</CardDescription>
                    </div>
                    {employee.direct_reports_count > 0 && (
                        <Badge className="cursor-pointer text-white bg-black hover:bg-[#121212] absolute bottom-[-10px] flex items-center" onClick={handleBadgeClick}>
                            {employee.direct_reports_count} Reports
                            <div className={isVisible ? 'transform rotate-180' : ''}>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5477 13.1321C15.3602 13.3196 15.1059 13.4249 14.8407 13.4249C14.5755 13.4249 14.3212 13.3196 14.1337 13.1321L10.8407 9.83908L7.54771 13.1321C7.35911 13.3142 7.1065 13.415 6.84431 13.4128C6.58211 13.4105 6.3313 13.3053 6.14589 13.1199C5.96048 12.9345 5.85531 12.6837 5.85303 12.4215C5.85076 12.1593 5.95155 11.9067 6.13371 11.7181L10.1337 7.71808C10.3212 7.53061 10.5755 7.42529 10.8407 7.42529C11.1059 7.42529 11.3602 7.53061 11.5477 7.71808L15.5477 11.7181C15.7352 11.9056 15.8405 12.1599 15.8405 12.4251C15.8405 12.6902 15.7352 12.9446 15.5477 13.1321Z" fill="white"/>
                                </svg>                            </div>
                        </Badge>
                    )}
                </CardHeader>
            </Card>
            {isVisible && (
                <>
                    <Separator className='bg-black h-[5px]' orientation='vertical'></Separator>
                    <Separator className='bg-black'></Separator>
                    <div className='flex justify-between w-full mb-14'>
                        <Separator className='bg-black h-[5px]' orientation='vertical'></Separator>
                        <Separator className='bg-black h-[5px]' orientation='vertical'></Separator>
                    </div>                    <div className="flex gap-4 flex-wrap justify-start">
                        {employee.direct_reports.map((report) => (
                            <EmployeeCard
                                key={report.id}
                                employee={report}
                                currentLevel={currentLevel}
                                selectedId={selectedId}
                                onBadgeClick={onBadgeClick}
                                nodeLevel={nodeLevel + 1}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default EmployeeCard;