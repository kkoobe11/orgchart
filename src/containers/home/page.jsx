'use client'


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import Image from "next/image";
import Link from 'next/link';
import OrgChart from "@/containers/homepage/components/orgchart/page";
import React, {useRef} from "react";

const Home = () => {
    const data = [
        {
            "id": 1,
            "name": "Walt Disney",
            "location": "Hong Kong",
            "employees": 1242,
            "industry": "Entertainment",
            "founded": 1923
        },
        {
            "id": 2,
            "name": "Microsoft",
            "location": "Redmond, Washington, United States",
            "employees": 163000,
            "industry": "Technology",
            "founded": 1975
        },
        {
            "id": 3,
            "name": "Tesla, Inc.",
            "location": "Palo Alto, California, United States",
            "employees": 70757,
            "industry": "Automotive",
            "founded": 2003
        },
        {
            "id": 4,
            "name": "Amazon.com, Inc.",
            "location": "Seattle, Washington, United States",
            "employees": 1298000,
            "industry": "E-commerce",
            "founded": 1994
        }
    ]
    const orgChartRef = useRef(null);

    return (
        <div className='flex flex-col items-center'>
          <div className='w-full min-h-[calc(100vh-5rem)]' ref={orgChartRef}>
              <OrgChart/>
          </div>
          {/*{data.map((company, index) => (*/}
          {/*    <Link key={index} className='h-full' href='/about'>*/}

          {/*    <Card className='rounded-lg h-full' key={index}>*/}
          {/*        <div className='p-2 flex flex-col h-full   '>*/}
          {/*            <div className=''>*/}
          {/*               <div className='w-full flex flex-col gap-2'>*/}
          {/*                   <Image className='w-full' src='https://picsum.photos/200/100?random=1' width={400} height={100} alt="Employee Image" />*/}
          {/*                   <span className='font-bold text-xl'>{company.name}</span>*/}
          {/*               </div>*/}
          {/*            </div>*/}
          {/*            <span className='pt-2'>{company.location}</span>*/}
          {/*            <CardDescription>{company.employees} employees</CardDescription>*/}
          {/*        </div>*/}
          {/*    </Card>*/}
          {/*    </Link>*/}

          {/*))}*/}
      </div>
  )
}

export default Home;