import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ArrowUpRight,
  Funnel,
  Search,
  AlertCircle,
  ArrowDown,
  Plus,
  Trash2,
  SquarePen,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Link } from "react-router-dom";

const Shipping = () => {
  const orders = [
    {
      id: 1,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "pending",
      stock: 1,
    },
    {
      id: 2,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "shipped",
      stock: 2,
    },
    {
      id: 3,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "delivered",
      stock: 4,
    },
    {
      id: 4,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 5,
    },
    {
      id: 5,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 5,
    },
    {
      id: 6,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 1,
    },
    {
      id: 7,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 2,
    },
    {
      id: 8,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 4,
    },
    {
      id: 9,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 5,
    },
    {
      id: 10,
      ordernumber: "123456789",
      address: "Albama",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "waiting",
      stock: 5,
    },
  ];

  return (
    <div className="p-[40px]  bg-white gap-[40px] flex flex-col">
      {/* --------------------------------------------- Section 01 --------------------------------------------- */}
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-semibold"> Manage Shipping</span>
        <div className="text-[14px] text-zinc-500 flex items-center gap-2">
          Here's analytic from :
          <Select className="">
            <SelectTrigger className="w-[141px] h-[40px] text-[16px] rounded-[24px] px-[16px] py-[8px] border-[2px] border-[#FF4D6D] ">
              <SelectValue placeholder="Today" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>{" "}
        </div>
      </div>
      {/* --------------------------------------------- Section 02 --------------------------------------------- */}
      <div className="flex gap-[20px]">
        <div className="w-[25%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-black font-semibold">
              Pending Shipment
            </span>
            <ArrowUpRight size={24} color="#FF4D6D" />
          </div>

          <div className="flex  justify-between items-end">
            <span className="text-[32px] text-black font-bold">30</span>
            {/* <div className="flex flex-col gap-[8px] items-end">
              <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#A0E7E5] rounded-[4px] w-fit">
                +10
              </div>
              <span className="text-[14px] text-zinc-500">From Last Week</span>
            </div> */}
          </div>
        </div>
        <div className="w-[25%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-black font-semibold">
              Waiting Pickup
            </span>
            <ArrowUpRight size={24} color="#FF4D6D" />
          </div>

          <div className="flex  justify-between items-end">
            <span className="text-[32px] text-black font-bold">5</span>
            {/* <div className="flex flex-col gap-[8px] items-end">
              <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                +3
              </div>
              <span className="text-[14px] text-zinc-500">From Last Week</span>
            </div> */}
          </div>
        </div>
        <div className="w-[25%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-black font-semibold">
              Shipped
            </span>
            <ArrowUpRight size={24} color="#FF4D6D" />
          </div>

          <div className="flex  justify-between items-end">
            <span className="text-[32px] text-black font-bold">3</span>
            {/* <div className="flex flex-col gap-[8px] items-end">
              <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                +4
              </div>
              <span className="text-[14px] text-zinc-500">From Last Week</span>
            </div> */}
          </div>
        </div>
        <div className="w-[25%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
          <div className="flex items-center justify-between">
            <span className="text-[20px] text-black font-semibold">
              Delivered
            </span>
            <ArrowUpRight size={24} color="#FF4D6D" />
          </div>

          <div className="flex  justify-between items-end">
            <span className="text-[32px] text-black font-bold">1</span>
            {/* <div className="flex flex-col gap-[8px] items-end">
              <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                +4
              </div>
              <span className="text-[14px] text-zinc-500">From Last Week</span>
            </div> */}
          </div>
        </div>
      </div>
      {/* --------------------------------------------- Section 03 --------------------------------------------- */}

      <div className=" flex justify-between">
        <div className="flex gap-[20px]">
          <div className="gap-[10px] rounded-full border border-slate-300 w-[290px]  items-center flex px-[16px] py-[8px]">
            <Search size={20} color="#878787" />{" "}
            <span className="text-[16px] text-[#878787]">Search Product</span>
          </div>
          <div className="gap-[10px] rounded-full border border-slate-300 w-fit flex px-[16px] py-[8px]">
            <Funnel size={20} color="#878787" />{" "}
            <span className="text-[16px] text-[#878787]">Filter</span>
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          <Link to="/inventory">
            <div className="gap-[10px] rounded-full border border-[#878787] w-fit flex px-[16px] py-[8px]  items-center">
              <Download size={24} color="#878787" />{" "}
              <span className="text-[16px] text-[#878787]">Export CSV</span>
            </div>
          </Link>
        </div>
      </div>

      {/* --------------------------------------------- Section 04 --------------------------------------------- */}
      <div className="overflow-x-auto bg-white">
        <div className="min-w-max">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#F7F7F7] font-light px-[8px] py-[12px] gap-[16px]">
                <TableHead className="w-[100px] px-[30px]">
                  <Checkbox id="terms-2" className="bg-white" />
                </TableHead>
                <TableHead className="w-[200px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  Order Number
                </TableHead>
                <TableHead className="w-[200px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    Date <ArrowDown size={20} color="#ff4d6d" />
                  </div>
                </TableHead>
                <TableHead className="w-[400px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  Item
                </TableHead>
                <TableHead className="w-[200px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  Address
                </TableHead>
                <TableHead className="w-[200px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  <div className="flex gap-2 items-center">
                    Shipment Status <ArrowDown size={20} color="#ff4d6d" />
                  </div>
                </TableHead>
                <TableHead className="w-[300px] text-[#878787] text-[16px] font-light whitespace-nowrap">
                  <div className="flex justify-center items-center w-full">
                    Action
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow className="border-0 py-3 h-[0px]" key={order.id}>
                  <TableCell className="px-[30px]">
                    <Checkbox id="terms-2" className="bg-white" />
                  </TableCell>
                  <TableCell>{order.ordernumber}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>
                    <div className="flex gap-4 items-center">
                      <img
                        src={order.image}
                        alt={order.item}
                        className="w-10 h-10 rounded object-cover"
                      />
                      {order.item}
                    </div>
                  </TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell className="align-middle text-center">
                    <div className="inline-flex justify-center items-center w-full">
                      {order.shipmentStatus === "pending" ? (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#FFD1DC] text-black">
                          Pending
                        </span>
                      ) : order.shipmentStatus === "waiting" ? (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#FFD1DC] text-black">
                          Waiting Pickup
                        </span>
                      ) : order.shipmentStatus === "picked" ? (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#A0E7E5] text-black">
                          Picked
                        </span>
                      ) : order.shipmentStatus === "shipped" ? (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#FFD1DC] text-black">
                          Shipped
                        </span>
                      ) : order.shipmentStatus === "delivered" ? (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#A0E7E5] text-black">
                          Delivered
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-md text-sm font-thin bg-[#FFD1DC] text-black">
                          {order.shipmentStatus}
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="align-middle text-right">
                    <div className="inline-flex justify-end items-center w-full">
                      {order.shipmentStatus === "pending" ? (
                        <div className="">
                          <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                            Edit
                          </span>
                          <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                            Mark Shipped
                          </span>
                        </div>
                      ) : order.shipmentStatus === "waiting" ? (
                        <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                          Send Reminder
                        </span>
                      ) : order.shipmentStatus === "picked" ? (
                        <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                          Mark Recieved
                        </span>
                      ) : order.shipmentStatus === "shipped" ? (
                        <div className="">
                          <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                            Track
                          </span>
                          <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                            Label
                          </span>
                        </div>
                      ) : order.shipmentStatus === "delivered" ? (
                        <div className="">
                          <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                            View
                          </span>
                        </div>
                      ) : (
                        <span className="px-3 py-1  text-sm font-medium text-[#FF4D6D]">
                          {order.shipmentStatus}
                        </span>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* --------------------------------------------- Section 05 --------------------------------------------- */}
      <div className="w-full flex justify-between">
        <span className="text-[18px] font-thin">
          Showing 1 to 10 of 239 results
        </span>{" "}
        <div className="max-w-1/2">
          <Pagination>
            <PaginationContent className="flex items-center gap-[12px]">
              <PaginationItem>
                <button
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-gray-400"
                  disabled>
                  <ChevronsLeft strokeWidth={1} size={24} />
                </button>
              </PaginationItem>
              <PaginationItem>
                <button
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-gray-400"
                  disabled>
                  <ChevronLeft strokeWidth={1} size={24} />
                </button>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  isActive
                  className="bg-[#FF4D6D] rounded-md border border-gray-200 px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-white">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-black">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  href="#"
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-black">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <button
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-black"
                  disabled>
                  <ChevronRight strokeWidth={1.5} size={24} />
                </button>
              </PaginationItem>
              <PaginationItem>
                <button
                  className="rounded-md border border-gray-200 bg-white px-2 py-1 w-[44px] h-[44px] flex justify-center items-center text-black"
                  disabled>
                  <ChevronsRight strokeWidth={1.5} size={24} />
                </button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
