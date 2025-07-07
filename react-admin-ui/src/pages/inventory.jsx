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

const Inventory = () => {
  const [enabled, setEnabled] = useState(true);
  const products = [
    {
      id: 1,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 1,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 2,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 2,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 3,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 4,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 4,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 5,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 5,
      name: "Beautiful Kurta Set",
      category: "Kurta Set Long...",
      sku: "ERI123",
      price: "$30",
      stock: 5,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 6,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 1,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 7,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 2,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 8,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 4,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 9,
      name: "Beautiful Kurta Set",
      category: "Kurta Set",
      sku: "ERI123",
      price: "$30",
      stock: 5,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
    {
      id: 10,
      name: "Beautiful Kurta Set",
      category: "Kurta Set Long...",
      sku: "ERI123",
      price: "$30",
      stock: 5,
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
    },
  ];
  return (
    <>
      <div className="  bg-white gap-[40px] flex flex-col">
        {/* --------------------------------------------- Section 01 --------------------------------------------- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-[20px] md:text-[24px] font-semibold">
            Manage Inventory
          </span>

          <div className="text-[14px] text-zinc-500 flex flex-col sm:flex-row sm:items-center gap-2">
            <span>Here's analytic from:</span>
            <Select>
              <SelectTrigger className="w-full sm:w-[141px] h-[40px] text-[16px] rounded-[24px] px-[16px] py-[8px] border-[2px] border-[#FF4D6D]">
                <SelectValue placeholder="Theme" />
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
          <div className="w-full sm:w-[48%] lg:w-[32%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                Total Items
              </span>
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[32px] text-black font-bold">239</span>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#A0E7E5] rounded-[4px] w-fit">
                  +10
                </div>
                <span className="text-[14px] text-zinc-500">
                  From Last Week
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[32%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                Low Stock Item
              </span>
              <ArrowUpRight size={24} color="#FF4D6D" />
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[32px] text-black font-bold">8</span>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                  +3
                </div>
                <span className="text-[14px] text-zinc-500">
                  From Last Week
                </span>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[48%] lg:w-[32%] rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                Out of Stock
              </span>
              <ArrowUpRight size={24} color="#FF4D6D" />
            </div>
            <div className="flex justify-between items-end">
              <span className="text-[32px] text-black font-bold">4</span>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                  +4
                </div>
                <span className="text-[14px] text-zinc-500">
                  From Last Week
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --------------------------------------------- Section 03 --------------------------------------------- */}

        <div className="flex flex-col gap-[16px] sm:flex-row sm:items-center sm:justify-between">
          {/* Left: Search & Filter */}
          <div className="flex flex-col gap-[12px] sm:flex-row sm:gap-[20px]">
            {/* Search */}
            <div className="flex items-center gap-[10px] rounded-full border border-slate-300 w-full sm:w-[290px] px-[16px] py-[8px]">
              <Search size={20} color="#878787" />
              <span className="text-[16px] text-[#878787]">Search Product</span>
            </div>
            {/* Filter */}
            <div className="flex items-center gap-[10px] rounded-full border border-slate-300 w-full sm:w-fit px-[16px] py-[8px]">
              <Funnel size={20} color="#878787" />
              <span className="text-[16px] text-[#878787]">Filter</span>
            </div>
          </div>

          {/* Right: Add New Item */}
          <div className="flex justify-end">
            <Link to="/inventory" className="w-full sm:w-fit">
              <div className="flex items-center justify-center gap-[10px] rounded-full border border-slate-300 bg-[#FF4D6D] w-full sm:w-fit px-[16px] py-[8px]">
                <Plus size={20} color="#FFFFFF" />
                <span className="text-[16px] text-[#FFFFFF]">Add New Item</span>
              </div>
            </Link>
          </div>
        </div>

        {/* --------------------------------------------- Section 04 --------------------------------------------- */}
        <div className="overflow-x-auto bg-white">
          <Table className="min-w-[800px]">
            <TableHeader>
              <TableRow className="bg-[#F7F7F7]">
                <TableHead className="w-[5%] p-[16px]">
                  <Checkbox id="terms-2" className="bg-white" />
                </TableHead>

                <TableHead className="w-[40%] text-[#878787] text-[16px] font-light pl-[16px]">
                  Product Name
                </TableHead>

                <TableHead className="w-[20%] text-[#878787] text-[16px] font-light ">
                  Categories
                </TableHead>

                <TableHead className="w-[10%] text-[#878787] text-[16px] font-light ">
                  SKU
                </TableHead>

                <TableHead className="w-[10%] text-[#878787] text-[16px] font-light ">
                  Price
                </TableHead>

                <TableHead className="w-[13%] text-[#878787] text-[16px] font-light ">
                  <div className="flex items-center gap-2">
                    Stock <ArrowDown size={20} color="#ff4d6d" />
                  </div>
                </TableHead>

                <TableHead className="w-[15%] text-[#878787] text-[16px] font-light pr-[30px]">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id} className="border-0">
                  <TableCell className="w-[5%] pl-[16px] py-3">
                    <Checkbox
                      id={`checkbox-${product.id}`}
                      className="bg-white"
                    />
                  </TableCell>

                  <TableCell className="w-[40%] py-3">
                    <div className="flex items-center gap-3 pl-[16px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span className="truncate max-w-[120px] sm:max-w-full">
                        {product.name}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="w-[20%] px-0 py-3 text-[#444] ">
                    {product.category}
                  </TableCell>

                  <TableCell className="w-[10%] px-0 py-3 text-[#444] ">
                    {product.sku}
                  </TableCell>

                  <TableCell className="w-[10%] px-0 py-3 text-[#444] ">
                    {product.price}
                  </TableCell>

                  <TableCell className="w-[13%] px-0 py-3 ">
                    <div className="flex items-center gap-2">
                      <span>{product.stock} item</span>
                      {product.stock < 10 && (
                        <AlertCircle className="text-red-500 w-4 h-4" />
                      )}
                    </div>
                  </TableCell>

                  <TableCell className="w-[15%] pr-[16px] py-3">
                    <div className="flex items-center gap-3 justify-start">
                      <SquarePen className="w-4 h-4 cursor-pointer" />
                      <Trash2 className="text-red-500 w-4 h-4 cursor-pointer" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* --------------------------------------------- Section 05 --------------------------------------------- */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="text-[16px] md:text-[18px] font-thin">
            Showing 1 to 10 of 239 results
          </span>

          <div className="w-full md:w-auto overflow-x-auto">
            <Pagination>
              <PaginationContent className="flex items-center gap-[8px]">
                <PaginationItem>
                  <button
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-gray-400"
                    disabled>
                    <ChevronsLeft strokeWidth={1} size={20} />
                  </button>
                </PaginationItem>

                <PaginationItem>
                  <button
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-gray-400"
                    disabled>
                    <ChevronLeft strokeWidth={1} size={20} />
                  </button>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    href="#"
                    isActive
                    className="bg-[#FF4D6D] rounded-md border border-gray-200 w-[40px] h-[40px] flex justify-center items-center text-white">
                    1
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-black">
                    2
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-black">
                    3
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <button
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-black"
                    disabled>
                    <ChevronRight strokeWidth={1.5} size={20} />
                  </button>
                </PaginationItem>

                <PaginationItem>
                  <button
                    className="rounded-md border border-gray-200 bg-white w-[40px] h-[40px] flex justify-center items-center text-black"
                    disabled>
                    <ChevronsRight strokeWidth={1.5} size={20} />
                  </button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventory;
