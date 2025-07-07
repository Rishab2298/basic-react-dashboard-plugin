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
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { Link } from "react-router-dom";

const Dashboard = () => {
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
  ];
  const orders = [
    {
      id: 1,
      ordernumber: "123456789",
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
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "picked",
      stock: 2,
    },
    {
      id: 3,
      ordernumber: "123456789",
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "pending",
      stock: 4,
    },
    {
      id: 4,
      ordernumber: "123456789",
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
      date: "2025-05-25",
      item: "Beautiful Kurta Set, +2 item",
      image:
        "https://navajowhite-chimpanzee-334337.hostingersite.com/wp-content/uploads/2025/07/beautifulKurtaSet.png",
      shipmentStatus: "pending",
      stock: 5,
    },
  ];
  return (
    <>
      <div className="  bg-white gap-[40px] flex flex-col">
        {/* --------------------------------------------- Section 01 --------------------------------------------- */}
        <div className="flex sm:flex-row flex-col items-center justify-between">
          <span className="text-[24px]"> Hi, Admin Erika</span>
          <div className="text-[14px] text-zinc-500 flex items-center gap-2">
            Here's analytic from :
            <Select className="">
              <SelectTrigger className="w-[141px] h-[40px] text-[16px] rounded-[24px] px-[16px] py-[8px] border-[2px] border-[#FF4D6D] ">
                <SelectValue placeholder="Theme" />
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
        <div className="flex md:flex-row flex-col gap-[20px]">
          <div className="md:w-[40%] w-full  rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                Total Revenue
              </span>
              <ArrowUpRight size={24} color="#FF4D6D" />
            </div>

            <div className="flex  justify-between items-end">
              <span className="text-[32px] text-black font-bold">$ 1,000</span>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#A0E7E5] rounded-[4px] w-fit">
                  +10%
                </div>
                <span className="text-[14px] text-zinc-500">
                  From Last Week
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[40%] w-full rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                Total Orders
              </span>
              <ArrowUpRight size={24} color="#FF4D6D" />
            </div>

            <div className="flex  justify-between items-end">
              <span className="text-[32px] text-black font-bold">734</span>
              <div className="flex flex-col gap-[8px] items-end">
                <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                  -2%
                </div>
                <span className="text-[14px] text-zinc-500">
                  From Last Week
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-[20%] w-full rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col justify-between gap-[24px]">
            <div className="flex items-center justify-between">
              <span className="text-[20px] text-black font-semibold">
                New Order Notification
              </span>
            </div>

            <div className="flex h-fit justify-between items-end">
              <div className="flex items-center space-x-2">
                <Switch
                  id="airplane-mode"
                  checked={enabled}
                  onCheckedChange={setEnabled}
                  className="bg-[#FF4D6D]  data-[state=checked]:bg-[#FF4D6D] peer"
                />
                <span className="text-[16px]">Notify me through email</span>
              </div>
              {/* <span className="text-[32px] text-black font-bold">
                 734
                </span>
                <div className="flex flex-col gap-[8px] items-end">
                  <div className="text-[14px] px-[8px] py-[4px] text-black bg-[#FFD1DC] rounded-[4px] w-fit">
                    -2%
                  </div>
                  <span className="text-[14px] text-zinc-500">
                    From Last Week
                  </span>
                </div> */}
            </div>
          </div>
        </div>
        {/* --------------------------------------------- Section 03 --------------------------------------------- */}
        <div className="rounded-[8px] border border-[#E3E3E3] p-[24px] flex flex-col gap-[24px]">
          <div className=" flex md:flex-row flex-col md:justify-between gap-[20px] justify-center  ">
            <span className="text-[20px] text-black font-semibold">
              Inventory Management
            </span>
            <div className="flex md:flex-row flex-col gap-[20px] items-center">
              <div className="gap-[10px] rounded-full border border-slate-300 md:w-[290px] w-full  items-center flex px-[16px] py-[8px]">
                <Search size={20} color="#878787" />{" "}
                <span className="text-[16px] text-[#878787]">
                  Search Product
                </span>
              </div>
              <div className="flex md:w-fit w-full gap-[20px]">
              <div className="gap-[10px] rounded-full border border-slate-300 md:w-fit  flex px-[16px] py-[8px]">
                <Funnel size={20} color="#878787" />{" "}
                <span className="text-[16px] text-[#878787]">Filter</span>
              </div>
              <Link to="/inventory">
                <div className="gap-[10px] rounded-full border border-slate-300 md:w-fit flex px-[16px] py-[8px] bg-[#FF4D6D] items-center">
                  <ArrowUpRight size={20} color="#FFFFFF" />{" "}
                  <span className="text-[16px] text-[#FFFFFF]">
                    Manage Inventory
                  </span>
                </div>
              </Link>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto bg-white  ">
            <Table>
              <TableHeader>
                <TableRow className=" bg-[#F7F7F7]  font-light  px-[8px] py-[12px] gap-[16px] ">
                  <TableHead className="w-[50%] text-[#878787] text-[16px] font-light pl-[30px]">
                    Product Name
                  </TableHead>
                  <TableHead className="w-[15%] text-[#878787] text-[16px] font-light">
                    Categories
                  </TableHead>
                  <TableHead className="w-[15%] text-[#878787] text-[16px] font-light">
                    SKU
                  </TableHead>
                  <TableHead className="w-[15%] text-[#878787] text-[16px] font-light">
                    Price
                  </TableHead>
                  <TableHead className="flex items-center gap-2 w-[15%] text-[#878787] text-[16px] font-light">
                    <div className="flex gap-2">
                      Stock <ArrowDown size={20} color="#ff4d6d" />{" "}
                    </div>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow className="border-0" key={product.id}>
                    <TableCell className="flex items-center gap-4 py-4 px-[30px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <span>{product.name}</span>
                    </TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.sku}</TableCell>
                    <TableCell>{product.price}</TableCell>
                   <TableCell className="align-middle">
  <div className="flex items-center gap-2">
    {product.stock} item
    <AlertCircle className="text-red-500 w-4 h-4" />
  </div>
</TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {/* --------------------------------------------- Section 04 --------------------------------------------- */}
       <div className="rounded-[8px] border border-[#E3E3E3] p-4 sm:p-6 flex flex-col gap-6">
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
    <span className="text-[18px] sm:text-[20px] text-black font-semibold">
      Shipping
    </span>
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
      <div className="flex gap-2 rounded-full border border-slate-300 px-4 py-2 items-center w-full sm:w-[290px]">
        <Search size={20} color="#878787" />
        <span className="text-[14px] sm:text-[16px] text-[#878787]">
          Search Order Number
        </span>
      </div>
      <Link to="/shipping" className="w-full sm:w-auto">
        <div className="flex gap-2 rounded-full border border-slate-300 px-4 py-2 bg-[#FF4D6D] items-center justify-center w-full">
          <ArrowUpRight size={20} color="#FFFFFF" />
          <span className="text-[14px] sm:text-[16px] text-[#FFFFFF]">
            Manage Shipping
          </span>
        </div>
      </Link>
    </div>
  </div>

  <div className="overflow-x-auto bg-white">
    <Table>
      <TableHeader>
        <TableRow className="bg-[#F7F7F7] text-[#878787] text-[14px] sm:text-[16px] font-light">
          <TableHead className="w-[150px] sm:w-[25%] pl-4 sm:pl-[30px]">
            Order #
          </TableHead>
          <TableHead className="w-[120px] sm:w-[25%]">
            <div className="flex gap-1 sm:gap-2 items-center">
              Date
              <ArrowDown size={16} color="#ff4d6d" />
            </div>
          </TableHead>
          <TableHead className="w-[200px] sm:w-[50%]">Item</TableHead>
          <TableHead className="w-[150px] sm:w-[25%]">
            <div className="flex gap-1 sm:gap-2 items-center">
              Shipment Status
              <ArrowDown size={16} color="#ff4d6d" />
            </div>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((order) => (
          <TableRow key={order.id} className="h-auto sm:h-[100px] border-0 py-3">
            <TableCell className="pl-4 sm:pl-[30px]">{order.ordernumber}</TableCell>
            <TableCell>{order.date}</TableCell>
            <TableCell>
              <div className="flex gap-3 items-center">
                <img
                  src={order.image}
                  alt={order.item}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded object-cover"
                />
                <span className="text-sm">{order.item}</span>
              </div>
            </TableCell>
            <TableCell className="text-center">
              <div className="inline-flex justify-center items-center w-full">
                <span
                  className={`px-3 py-1 rounded-md text-sm font-thin ${
                    order.shipmentStatus === "pending" || order.shipmentStatus === "waiting"
                      ? "bg-[#FFD1DC] text-black"
                      : order.shipmentStatus === "picked"
                      ? "bg-[#A0E7E5] text-black"
                      : "bg-[#FFD1DC] text-black"
                  }`}
                >
                  {order.shipmentStatus === "waiting"
                    ? "Waiting Pickup"
                    : order.shipmentStatus.charAt(0).toUpperCase() + order.shipmentStatus.slice(1)}
                </span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
</div>

      </div>
    </>
  );
};

export default Dashboard;
