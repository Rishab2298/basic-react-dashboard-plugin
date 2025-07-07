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
    <div className="  bg-white gap-[40px] flex flex-col">
      {/* --------------------------------------------- Section 01 --------------------------------------------- */}
     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
  <span className="text-[20px] md:text-[24px] font-semibold">
    Manage Shipping
  </span>
  
  <div className="text-[14px] text-zinc-500 flex flex-col sm:flex-row sm:items-center gap-2">
    <span>Here's analytic from :</span>
    <Select>
      <SelectTrigger className="w-full sm:w-[141px] h-[40px] text-[16px] rounded-[24px] px-[16px] py-[8px] border-[2px] border-[#FF4D6D]">
        <SelectValue placeholder="Today" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  </div>
</div>

      {/* --------------------------------------------- Section 02 --------------------------------------------- */}
    <div className="flex flex-wrap gap-[20px]">
  {[
    { title: "Pending Shipment", value: 30 },
    { title: "Waiting Pickup", value: 5 },
    { title: "Shipped", value: 3 },
    { title: "Delivered", value: 1 },
  ].map((item, index) => (
    <div
      key={index}
      className="w-full min-w-[250px] md:w-[48%] lg:w-[23%] flex-1 rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]"
    >
      <div className="flex items-center justify-between">
        <span className="text-[20px] text-black font-semibold">
          {item.title}
        </span>
        <ArrowUpRight size={24} color="#FF4D6D" />
      </div>

      <div className="flex justify-between items-end">
        <span className="text-[32px] text-black font-bold">{item.value}</span>
      </div>
    </div>
  ))}
</div>

      {/* --------------------------------------------- Section 03 --------------------------------------------- */}

    <div className="flex flex-col sm:flex-row sm:justify-between gap-[16px] sm:gap-0 w-full">
  {/* Left Section: Search + Filter */}
  <div className="flex flex-col sm:flex-row gap-[12px] sm:gap-[20px]">
    {/* Search Bar */}
    <div className="flex items-center gap-[10px] rounded-full border border-slate-300 px-[16px] py-[8px] w-full sm:w-[290px]">
      <Search size={20} color="#878787" />
      <span className="text-[16px] text-[#878787]">Search Product</span>
    </div>

    {/* Filter Button */}
    <div className="flex items-center gap-[10px] rounded-full border border-slate-300 px-[16px] py-[8px] w-fit">
      <Funnel size={20} color="#878787" />
      <span className="text-[16px] text-[#878787]">Filter</span>
    </div>
  </div>

  {/* Right Section: Export Button */}
  <div className="flex justify-start sm:justify-end">
    <Link to="/inventory">
      <div className="flex items-center gap-[10px] rounded-full border border-[#878787] px-[16px] py-[8px] w-fit">
        <Download size={24} color="#878787" />
        <span className="text-[16px] text-[#878787]">Export CSV</span>
      </div>
    </Link>
  </div>
</div>


      {/* --------------------------------------------- Section 04 --------------------------------------------- */}
  <div className="w-full overflow-x-auto bg-white">
  <div className="w-max min-w-full">
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F7F7F7] text-sm sm:text-base">
          <TableHead className="w-[80px] px-4 sm:px-6">
            <Checkbox id="terms-2" className="bg-white" />
          </TableHead>
          <TableHead className="min-w-[150px] text-[#878787] font-light whitespace-nowrap">
            Order Number
          </TableHead>
          <TableHead className="min-w-[150px] text-[#878787] font-light whitespace-nowrap">
            <div className="flex gap-1 items-center">
              Date <ArrowDown size={16} color="#ff4d6d" />
            </div>
          </TableHead>
          <TableHead className="min-w-[300px] text-[#878787] font-light whitespace-nowrap">
            Item
          </TableHead>
          <TableHead className="min-w-[200px] text-[#878787] font-light whitespace-nowrap hidden lg:table-cell">
            Address
          </TableHead>
          <TableHead className="min-w-[180px] text-[#878787] font-light whitespace-nowrap">
            <div className="flex gap-1 items-center">
              Shipment Status <ArrowDown size={16} color="#ff4d6d" />
            </div>
          </TableHead>
          <TableHead className="min-w-[180px] text-[#878787] font-light text-center whitespace-nowrap">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="h-[70px] border-0 text-sm sm:text-base">
            <TableCell className="px-4 sm:px-6">
              <Checkbox id="terms-2" className="bg-white" />
            </TableCell>
            <TableCell>{order.ordernumber}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <div className="flex gap-2 items-center">
                <img
                  src={order.image}
                  alt={order.item}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded object-cover"
                />
                <span className="truncate max-w-[120px] sm:max-w-none">{order.item}</span>
              </div>
            </TableCell>
            <TableCell className="hidden lg:table-cell">
              {order.address}
            </TableCell>
            <TableCell className="text-center">
              <span
                className={`px-3 py-1 rounded-md text-xs sm:text-sm font-thin ${
                  order.shipmentStatus === "picked" ||
                  order.shipmentStatus === "delivered"
                    ? "bg-[#A0E7E5]"
                    : "bg-[#FFD1DC]"
                } text-black`}
              >
                {order.shipmentStatus === "waiting" ? "Waiting Pickup" : order.shipmentStatus}
              </span>
            </TableCell>
            <TableCell className="text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-1 text-[#FF4D6D] text-xs sm:text-sm">
                {order.shipmentStatus === "pending" && (
                  <>
                    <span>Edit</span>
                    <span>Mark Shipped</span>
                  </>
                )}
                {order.shipmentStatus === "waiting" && <span>Send Reminder</span>}
                {order.shipmentStatus === "picked" && <span>Mark Received</span>}
                {order.shipmentStatus === "shipped" && (
                  <>
                    <span>Track</span>
                    <span>Label</span>
                  </>
                )}
                {order.shipmentStatus === "delivered" && <span>View</span>}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>


      {/* --------------------------------------------- Section 05 --------------------------------------------- */}
      <div className="w-full flex md:flex-row flex-col  gap-[20px] md:justify-between">
        <span className="text-[18px] font-thin">
          Showing 1 to 10 of 239 results
        </span>{" "}
        <div className="">
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
