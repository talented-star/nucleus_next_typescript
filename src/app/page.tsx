'use client'
import Image from "next/image";
import HomeSection from "@/components/home-section";
import FeaturesCard from "../components/what-we-do-section";
import ContactUsSection from "@/components/contact-us-section";
import SpecializedSection from "@/components/specialized-section";
import Technology from "@/components/technology";
import Clients from "@/components/clients";
import Connect from "@/components/connect";
import React from "react";
import Trust from "@/components/trust";
import BenificalElement from "../components/what-we-do-section";
import HireSection from "@/components/hire-section";
import EasyProcess from "@/components/easy-process";
import Technologies from "@/components/techologies";
import SalesTeam from "@/components/SalesTeam";
import BuildingBridge from "@/components/building-bridge";
import MeetFounder from "@/components/meet-founder";
import CustomerService from "@/components/customer-service";


export default function Home() {

  return (
      <div className={'h-full w-full bg-[#E8E8E8] overflow-hidden'}>
          <div className={'relative'}>
              <HomeSection />
              <Trust />

          </div>
          <BenificalElement/>
          <Technologies/>
          <SalesTeam/>
          <HireSection heading={"Hire Permanent and Remote Developers"} description={"From full-time remote engineering teams to hourly contractors, work with remote devs as needed"}/>
          <BuildingBridge/>
          <SpecializedSection header/>
          <MeetFounder/>
          <Clients/>
          <CustomerService/>
          {/* <ContactUsSection/> */}
          <Connect background="/images/connect.png"/>

      </div>
  );
}
