"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Image from "next/image"
import Link from "next/link"
import { links } from "../links"
import { Menu } from 'lucide-react';

export const DrawerNav = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="md:hidden">
        <Button variant="outline"><Menu color="black" size={48} /></Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="flex flex-col items-center">
          <Image src={'/logos/pharmalogo.svg'} alt={''} width={110} height={200} className='self-center py-4' />
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerDescription>Conocenos un como mas</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-3 w-full px-5">
          {
            links.map((link, index) => (
              <Link key={index} href={link.link} ><Button className="w-full bg-blue-950">{link.text}</Button></Link>
            ))
          }
        </div>

        <DrawerFooter >
          <p className="text-center">® 2023. Phamaplant Casa de Representación C.A.</p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
